(function (doc) {

    var styleNode = doc.createElement('style');
    var content = document.createTextNode('@@STYLES');

    styleNode.appendChild(content);
    doc.head.appendChild(styleNode);

}(document));
