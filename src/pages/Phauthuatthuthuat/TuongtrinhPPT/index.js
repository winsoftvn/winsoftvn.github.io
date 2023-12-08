import SunEditor from "suneditor-react";
import "suneditor/dist/css/suneditor.min.css";
import {
    align,
    font,
    fontColor,
    fontSize,
    formatBlock,
    hiliteColor,
    horizontalRule,
    lineHeight,
    list,
    paragraphStyle,
    table,
    template,
    textStyle,
    image,
    link,
} from "suneditor/src/plugins";
function TuongtrinhPPT() {
    return (
        <>
            <div>
                <SunEditor
                    autoFocus={true}
                    lang="en"
                    setDefaultStyle="height:500px"
                    setOptions={{
                        showPathLabel: false,

                        placeholder: "Enter your text here!!!",
                        plugins: [
                            align,
                            font,
                            fontColor,
                            fontSize,
                            formatBlock,
                            hiliteColor,
                            horizontalRule,
                            lineHeight,
                            list,
                            paragraphStyle,
                            table,
                            template,
                            textStyle,
                            image,
                            link,
                        ],
                        buttonList: [
                            ["font", "fontSize", "formatBlock"],
                            ["bold", "underline", "italic"],
                            ["fontColor", "hiliteColor"],
                            ["removeFormat"],

                            ["outdent", "indent"],
                            ["align", "horizontalRule", "list", "lineHeight"],
                        ],
                        formats: ["p", "div", "h1", "h2", "h3", "h4", "h5", "h6"],
                        font: [
                            "Arial",
                            "Calibri",
                            "Comic Sans",
                            "Courier",
                            "Garamond",
                            "Georgia",
                            "Impact",
                            "Lucida Console",
                            "Palatino Linotype",
                            "Segoe UI",
                            "Tahoma",
                            "Times New Roman",
                            "Trebuchet MS",
                        ],
                    }}
                />
            </div>
        </>
    );
}

export default TuongtrinhPPT;
