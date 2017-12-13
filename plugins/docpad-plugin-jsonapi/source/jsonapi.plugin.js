var fs = require('fs');

module.exports = function (BasePlugin) {
  return BasePlugin.extend({
      name: 'jsonapi',
      writeAfter: function(opts, next) {
        console.log('Starting JSON API Generation');
        
        var collection, templateData;
        
        ({collection, templateData} = opts);

        //console.log(collection.models[0].attributes);
        //console.log(collection.models[0].meta.attributes);

        collection.models.forEach(function(model, cbEach) {
          var json = model.meta.attributes;
          if(json.layout && json.layout === 'post') {
            //console.log(json);
            var outName = model.attributes.outPath;
            var jsonName = model.attributes.outPath.replace('/index.html', '.json');

            json.computedProperties = {
              markdown: model.attributes.content
            }

            fs.writeFile(jsonName, JSON.stringify(json), function (err) {
              if (err) return console.log(err);
              console.log('Wrote API File ' + jsonName);
            });
          }
        });

        next();
      }
  });
};