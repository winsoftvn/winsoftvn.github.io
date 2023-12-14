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
                    Rotate={{ angle: 90, componentType: "slider" }}
                    onClose={() => setOpen(false)}
                    Crop={{
                        presetsItems: [
                            {
                                titleKey: "classicTv",
                                descriptionKey: "4:3",
                                ratio: 4 / 3,
                            },
                            {
                                titleKey: "cinemascope",
                                descriptionKey: "21:9",
                                ratio: 21 / 9,
                            },
                        ],
                        presetsFolders: [
                            {
                                titleKey: "socialMedia",
                                groups: [
                                    {
                                        titleKey: "facebook",
                                        items: [
                                            {
                                                titleKey: "profile",
                                                width: 200,
                                                height: 200,
                                                descriptionKey: "fbProfileSize",
                                            },
                                            {
                                                titleKey: "coverPhoto",
                                                width: 820,
                                                height: 312,
                                                descriptionKey: "fbCoverPhotoSize",
                                            },
                                        ],
                                    },
                                ],
                            },
                        ],
                    }}
                    tabsIds={[TABS.ADJUST, TABS.FINETUNE, TABS.FILTERS, TABS.RESIZE]}
                    defaultTabId={TABS.ADJUST} // or 'Annotate'
                
                />
            </div>
        </Modal>
    );
}

export default EditorImage;
