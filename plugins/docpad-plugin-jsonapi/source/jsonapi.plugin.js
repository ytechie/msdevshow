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
          var attributes = model.meta.attributes;
          if(attributes.layout && attributes.layout === 'post') {
            //console.log(attributes);
            var outName = model.attributes.outPath;
            var jsonName = model.attributes.outPath.replace('/index.html', '.json');

            fs.writeFile(jsonName, JSON.stringify(attributes), function (err) {
              if (err) return console.log(err);
              console.log('Wrote API File ' + jsonName);
            });
          }
        });

        next();
      }
  });
};