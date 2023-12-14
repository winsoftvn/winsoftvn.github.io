import { Modal } from "antd";
import FilerobotImageEditor, { TABS, TOOLS } from "react-filerobot-image-editor";

function EditorImage(props) {
    const { open, setOpen, dsanh, imgchoose } = props;

    return (
        <Modal
            centered
            open={open}
            okButtonProps={{
                style: {
                    display: "none",
                },
            }}
            cancelButtonProps={{
                style: {
                    display: "none",
                },
            }}
            closable={false}
            width={"100vw"}
        >
            <div>
                <FilerobotImageEditor
                    source={imgchoose.linkanh ? imgchoose.linkanh : ""}
                    onSave={(editedImageObject, designState) => {
                        dsanh[imgchoose.vitri] = editedImageObject.imageBase64;
                        
                        setOpen(false);
                    }}
                    onClose={() => setOpen(false)}
                  
                    tabsIds={[TABS.ADJUST, TABS.FINETUNE, TABS.FILTERS, TABS.RESIZE]}
                    defaultTabId={TABS.FILTERS}
                    defaultToolId={TABS.FILTERS}
                />
            </div>
        </Modal>
    );
}

export default EditorImage;
