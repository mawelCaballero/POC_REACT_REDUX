module.exports = function(metadata, response) {

    var viewData = {};

    if (metadata && response) {


        var title = '';
        var sections = [];

        if (metadata.metamodel) {
            title = metadata.metamodel.name;
            for (var i = 0; i < metadata.metamodel.sections.length; i++) {

                var currentSection = metadata.metamodel.sections[i];

                var properties = [];
                for (var j = 0; j < currentSection.properties.length; j++) {
                    var currentProperty = currentSection.properties[j];

                    switch (currentProperty.type) {
                        case 'text':
                            properties.push({
                                id: currentProperty.id,
                                type: currentProperty.type,
                                label: currentProperty.label,
                                class: currentProperty.class,
                                value: currentProperty.uiInput ? currentProperty.initValue : getPropertyValue(currentProperty.id, response),
                                action: currentProperty.action ? currentProperty.action : null,
                                href: response._links ? response._links.self.href : ''
                            });

                            break;
                        case 'table':
                            properties.push({
                                id: currentProperty.id,
                                type: currentProperty.type,
                                label: currentProperty.label,
                                class: currentProperty.class,
                                rows: getRowsValue(currentProperty.columns, response),
                                cols: getColsValue(currentProperty.columns)
                            });

                            break;
                        default:
                            break;
                    }




                }

                sections[i] = {
                    title: currentSection.title,
                    properties: properties
                }
            }
        }

        viewData = {
            title: title,
            sections: sections
        };

    }
    return viewData;
};

var getPropertyValue = function(id, properties) {
    for (var currentId in properties) {
        if (id === currentId) {
            return properties[id];
        }
    }
    return null;
}

var getPropertyLink = function(id, properties) {
    debugger;
    for (var currentId in properties) {
        if (id === currentId) {
            return properties[id]._links.self.href;
        }
    }
    return null;
}


var getRowsValue = function(columns, properties) {
    var rows = [];

    properties = Array.isArray(properties) ? properties : [properties];

    for (var i = 0; i < properties.length; i++) {
        var items = {};
        items.href = properties[i].href;
        for (var currentColumn in columns) {

            if (items !== null && typeof items[columns[currentColumn].id] === 'undefined') {
                items[columns[currentColumn].id] = properties[i].summary[columns[currentColumn].id] || '';
            }
        }
        rows.push(items);
    }

    return rows;
}

var getColsValue = function(columns) {
    var cols = [];
    for (var currentColumn in columns) {
        cols.push(columns[currentColumn].id);
    }
    return cols;
}
