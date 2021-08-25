// html OR json
let parse_json_html_return = "html";
exports.parse_json_html_return = parse_json_html_return;

elementAttrs = (ele) => {

    let id = `${ele.id ? `id="${ele.id}"` : ''}`;
    let classes = `${ele.classes ? `class="${ele.classes}"` : ''}`;
    let style = `${ele.style ? `style="${ele.style}"` : ''}`;
    let href = `${ele.href ? `href="${ele.href}"` : ''}`;

    return `${id} ${classes} ${style} ${href}`
}

logStringContent = (string) => {
    // console.log(string);
    // let tmp_result = { "tag": string.tag, "classes": string.classes, "content": "string" };
    let tmp_result = `${string}`;
    let tmp_html = `<${string.tag} ${elementAttrs(string)}> ${string} </${string.tag}>`;

    if (parse_json_html_return == "html") {
        return tmp_html;
    } else {
        return tmp_result;
    }
}

logArrayContent = (array) => {
    // console.log(array);
    let tmp_result = { "tag": array.tag, "classes": array.classes, "content": this.checkSectionContent(array.content) };
    let tmp_html = `<${array.tag} ${elementAttrs(array)}> ${this.checkSectionContent(array.content)} </${array.tag}>`;

    if (parse_json_html_return == "html") {
        return tmp_html;
    } else {
        return tmp_result;
    }
}

logObjectContent = (object) => {
    // console.log(object);
    let tmp_result = { "tag": object.tag, "classes": object.classes, "content": this.checkSectionContent(object.content) };
    let tmp_html = `<${object.tag} ${elementAttrs(object)}> ${this.checkSectionContent(object.content)} </${object.tag}>`;

    if (parse_json_html_return == "html") {
        return tmp_html;
    } else {
        return tmp_result;
    }
}

exports.checkSectionContent = (section_content) => {

    let result = [];
    let html = ``;

    if (typeof (section_content) == "string") {
        let tmp_str;
        tmp_str = logStringContent(section_content);

        html += tmp_str;
        result.push(tmp_str);

    } else if (typeof (section_content) == "object" && Array.isArray(section_content)) {
        let tmp_arr = [];
        let tmp_html = ``;

        section_content.forEach(content => {
            tmp_arr.push(logArrayContent(content));
            tmp_html += logArrayContent(content);
        })

        result.push(tmp_arr);
        html += tmp_html;

    } else if (typeof (section_content) == "object" && !Array.isArray(section_content)) {
        let tmp_result;
        tmp_result = logObjectContent(section_content);

        result.push(tmp_result);
        html += tmp_result;

    } else {
        // let tmp_result = { "tag": "unknown", "content": typeof (section_content) };
        let tmp_result = "";

        result.push(tmp_result);
        html += ` `;
    }

    if (parse_json_html_return == "html") {
        return html;
    } else {
        return result;
    }

    // console.log('result: ', result);
    // console.log('content: ', typeof (content));
    // console.log('____________________________________');
    // if (typeof (content) == "string") {
    //     result += `{${content.tag}, ${typeof (content.content)}}, `;
    // } else if (typeof (content) == "object") {
    //     if (Array.isArray(content)) {
    //         content.map(cont => {
    //             array_content = []
    //             checkContentArray(result, cont);
    //         });
    //     } else {
    //         result += `{${content.tag}, ${typeof (content.content)}}, `;
    //         this.content = content;
    //         this.result = result;
    //         return checkSectionContent(result, content.content);
    //     }
    // }
}