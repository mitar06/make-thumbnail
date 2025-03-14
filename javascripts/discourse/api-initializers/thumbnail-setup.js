import { apiInitializer } from "discourse/lib/api";
import loadScript from "discourse/lib/load-script";
import I18n from "I18n";


export default apiInitializer("0.11.1", (api) => {
    const { iconNode } = require("discourse-common/lib/icon-library");
    const currentLocale = I18n.currentLocale();
  
    // Localization setup - keep only the button titles in translations
   
   
  
    // Toolbar Button Definitions
    api.onToolbarCreate((toolbar) => {
      const buttons = [
        {
          id: "make_thumbnail_button",
          group: "fontStyles",
          icon: "image",
          shortcut: "M",
          title: "Make Thumbnail",
          perform: (e) => { 
            console.log(e.getText()); 
            let currentlySelected = e.selected.value;
            let thumbnailMarkdownIntegrated
            if (currentlySelected.startsWith("[wrap=hidden]") && currentlySelected.endsWith("[/wrap]") && currentlySelected.includes("|thumbnail")){
                 thumbnailMarkdownIntegrated = currentlySelected.replace("[wrap=hidden]", "")
                                                                .replace("[/wrap]", "")
                                                                .replace("|thumbnail", "");
            }else{
                 thumbnailMarkdownIntegrated = "[wrap=hidden]" + currentlySelected.replace(']', "|thumbnail]") + "[/wrap]";
            }
        
            return e.replaceText(currentlySelected, thumbnailMarkdownIntegrated);
            },
        },
    ];
  
      buttons.forEach((button) => toolbar.addButton(button));
    });

  });