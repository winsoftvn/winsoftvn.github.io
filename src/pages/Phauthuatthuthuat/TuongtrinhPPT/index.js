import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
function TuongtrinhPPT() {
    return (
        <>
        <div >
            <CKEditor
                editor={ClassicEditor}
                // data={desVocabulary || ""}
                onReady={(editor) => {
                    editor.editing.view.change((writer) => {
                        writer.setStyle("height", "100vh", editor.editing.view.document.getRoot());
                    });
                }}
                onChange={(event, editor) => {
                    const data = editor.getData();
                    // setValueDesVocabulary(data);
                }}
            /></div>
        </>
    );
}

export default TuongtrinhPPT;
