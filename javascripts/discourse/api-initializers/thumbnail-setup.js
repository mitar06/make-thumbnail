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
          shortcut: "T",
          title: "Make Thumbnail",
          perform: (e) => { console.log(e); return  e.applySurround("[wrap=hidden]", "[/wrap]", "make_thumbnail_button_text");  },
        },
    ];
  
      buttons.forEach((button) => toolbar.addButton(button));
    });

  });