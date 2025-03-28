TDV.PlayerAPI.defineScript({ "definitions": [
 {
  "hfovMin": 60,
  "hfovMax": 120,
  "id": "panorama_37A46412_3D2A_16DF_41BD_18BC1233FA77",
  "frames": [
   {
    "thumbnailUrl": "media/panorama_37A46412_3D2A_16DF_41BD_18BC1233FA77_t.jpg",
    "class": "SphericPanoramaFrame",
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "height": 2048,
       "class": "ImageResourceLevel",
       "width": 4096,
       "url": "media/panorama_37A46412_3D2A_16DF_41BD_18BC1233FA77_hq.jpeg"
      },
      {
       "height": 2001,
       "class": "ImageResourceLevel",
       "width": 4002,
       "url": "media/panorama_37A46412_3D2A_16DF_41BD_18BC1233FA77.jpeg"
      }
     ]
    },
    "overlays": [
     {
      "id": "panorama_37A46412_3D2A_16DF_41BD_18BC1233FA77_tcap0",
      "angle": 0,
      "rotate": false,
      "class": "TripodCapPanoramaOverlay",
      "hfov": 45,
      "image": {
       "class": "ImageResource",
       "levels": [
        {
         "height": 850,
         "class": "ImageResourceLevel",
         "width": 850,
         "url": "media/panorama_37A46412_3D2A_16DF_41BD_18BC1233FA77_tcap0.png"
        }
       ]
      },
      "inertia": false
     },
     {
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000",
        "click": "this.showPopupPanoramaOverlay(this.popup_3331A4F3_3DEA_7F11_41CC_99269F06A67B, {'pressedIconLineWidth':5,'iconWidth':20,'borderColor':'#000000','backgroundColorDirection':'vertical','pressedBorderSize':0,'paddingLeft':5,'pressedBackgroundColorRatios':[0,0.1607843137254902,1],'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconLineWidth':5,'pressedBorderColor':'#000000','iconColor':'#000000','rollOverIconColor':'#666666','pressedBackgroundOpacity':0.3,'paddingRight':5,'iconHeight':20,'backgroundColorRatios':[0,0.09803921568627451,1],'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconHeight':20,'backgroundOpacity':0.3,'pressedIconColor':'#888888','pressedBackgroundColorDirection':'vertical','paddingTop':5,'rollOverBorderColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedIconWidth':20,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'paddingBottom':5,'rollOverIconHeight':20,'rollOverIconWidth':20,'rollOverBackgroundOpacity':0.3,'borderSize':0,'rollOverIconLineWidth':5,'rollOverBackgroundColorDirection':'vertical','rollOverBorderSize':0}, this.ImageResource_32B74A03_3DEB_8AF1_41B5_81EF539DA611, null, null, null, null, false)"
       }
      ],
      "id": "overlay_336321FA_3DEE_9913_41C2_D05456067409",
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "hfov": 6.44,
        "yaw": 2.14,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 35,
           "class": "ImageResourceLevel",
           "width": 37,
           "url": "media/panorama_37A46412_3D2A_16DF_41BD_18BC1233FA77_0_HS_1_0_0_map.gif"
          }
         ]
        },
        "pitch": -8.24
       }
      ],
      "useHandCursor": true,
      "data": {
       "label": "Image"
      },
      "class": "HotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "enabledInCardboard": true,
      "items": [
       {
        "yaw": 2.14,
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 6.44,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 71,
           "class": "ImageResourceLevel",
           "width": 74,
           "url": "media/panorama_37A46412_3D2A_16DF_41BD_18BC1233FA77_0_HS_1_0.png"
          }
         ]
        },
        "pitch": -8.24
       }
      ]
     },
     {
      "rotationZ": 0,
      "yaw": 2.14,
      "hideEasing": "cubic_out",
      "pitch": -8.24,
      "class": "PopupPanoramaOverlay",
      "hfov": 6.44,
      "showDuration": 500,
      "hideDuration": 500,
      "showEasing": "cubic_in",
      "id": "popup_3331A4F3_3DEA_7F11_41CC_99269F06A67B",
      "rotationX": 0,
      "popupMaxWidth": "95%",
      "image": {
       "class": "ImageResource",
       "levels": [
        {
         "height": 561,
         "class": "ImageResourceLevel",
         "width": 1024,
         "url": "media/popup_3331A4F3_3DEA_7F11_41CC_99269F06A67B_0_1.jpg"
        }
       ]
      },
      "rotationY": 0,
      "popupMaxHeight": "95%"
     }
    ]
   }
  ],
  "pitch": 0,
  "class": "Panorama",
  "hfov": 360,
  "partial": false,
  "label": "Panorama1",
  "vfov": 180,
  "thumbnailUrl": "media/panorama_37A46412_3D2A_16DF_41BD_18BC1233FA77_t.jpg"
 },
 {
  "touchControlMode": "drag_rotation",
  "buttonMoveLeft": {
   "minWidth": 0,
   "paddingLeft": 0,
   "verticalAlign": "middle",
   "mode": "push",
   "paddingRight": 0,
   "height": 40,
   "width": 40,
   "borderRadius": 0,
   "paddingTop": 0,
   "rollOverIconURL": "skin/IconButton_52344940_5F01_EFC4_41D0_C6DE67446A2C_rollover.png",
   "class": "IconButton",
   "horizontalAlign": "center",
   "shadow": false,
   "pressedIconURL": "skin/IconButton_52344940_5F01_EFC4_41D0_C6DE67446A2C_pressed.png",
   "borderSize": 0,
   "cursor": "hand",
   "id": "IconButton_52344940_5F01_EFC4_41D0_C6DE67446A2C",
   "data": {
    "name": "Button53063"
   },
   "backgroundOpacity": 0,
   "minHeight": 0,
   "paddingBottom": 0,
   "iconURL": "skin/IconButton_52344940_5F01_EFC4_41D0_C6DE67446A2C.png",
   "transparencyActive": true
  },
  "viewerArea": "this.MainViewer",
  "class": "PanoramaPlayer",
  "buttonPlayLeft": {
   "minWidth": 0,
   "paddingLeft": 0,
   "verticalAlign": "middle",
   "mode": "push",
   "paddingRight": 0,
   "height": 40,
   "width": 40,
   "borderRadius": 0,
   "paddingTop": 0,
   "rollOverIconURL": "skin/IconButton_52344940_5F01_EFC4_41D4_A1CCD7021F0A_rollover.png",
   "class": "IconButton",
   "horizontalAlign": "center",
   "shadow": false,
   "pressedIconURL": "skin/IconButton_52344940_5F01_EFC4_41D4_A1CCD7021F0A_pressed.png",
   "borderSize": 0,
   "cursor": "hand",
   "id": "IconButton_52344940_5F01_EFC4_41D4_A1CCD7021F0A",
   "data": {
    "name": "Button53062"
   },
   "backgroundOpacity": 0,
   "minHeight": 0,
   "paddingBottom": 0,
   "iconURL": "skin/IconButton_52344940_5F01_EFC4_41D4_A1CCD7021F0A.png",
   "transparencyActive": true
  },
  "preloadEnabled": false,
  "buttonMoveDown": {
   "minWidth": 0,
   "paddingLeft": 0,
   "verticalAlign": "middle",
   "mode": "push",
   "paddingRight": 0,
   "height": 40,
   "width": 40,
   "borderRadius": 0,
   "paddingTop": 0,
   "rollOverIconURL": "skin/IconButton_52344940_5F01_EFC4_41B5_303051AFBE15_rollover.png",
   "class": "IconButton",
   "horizontalAlign": "center",
   "shadow": false,
   "pressedIconURL": "skin/IconButton_52344940_5F01_EFC4_41B5_303051AFBE15_pressed.png",
   "borderSize": 0,
   "cursor": "hand",
   "id": "IconButton_52344940_5F01_EFC4_41B5_303051AFBE15",
   "data": {
    "name": "Button53067"
   },
   "backgroundOpacity": 0,
   "minHeight": 0,
   "paddingBottom": 0,
   "iconURL": "skin/IconButton_52344940_5F01_EFC4_41B5_303051AFBE15.png",
   "transparencyActive": true
  },
  "buttonPause": {
   "minWidth": 0,
   "paddingLeft": 0,
   "verticalAlign": "middle",
   "mode": "toggle",
   "paddingRight": 0,
   "height": 40,
   "width": 40,
   "borderRadius": 0,
   "paddingTop": 0,
   "class": "IconButton",
   "horizontalAlign": "center",
   "shadow": false,
   "pressedIconURL": "skin/IconButton_52344940_5F01_EFC4_41CC_4A5BFB01C469_pressed.png",
   "borderSize": 0,
   "cursor": "hand",
   "id": "IconButton_52344940_5F01_EFC4_41CC_4A5BFB01C469",
   "data": {
    "name": "Button53066"
   },
   "backgroundOpacity": 0,
   "minHeight": 0,
   "paddingBottom": 0,
   "iconURL": "skin/IconButton_52344940_5F01_EFC4_41CC_4A5BFB01C469.png",
   "transparencyActive": true
  },
  "buttonPlayRight": {
   "minWidth": 0,
   "paddingLeft": 0,
   "verticalAlign": "middle",
   "mode": "push",
   "paddingRight": 0,
   "height": 40,
   "width": 40,
   "borderRadius": 0,
   "paddingTop": 0,
   "rollOverIconURL": "skin/IconButton_52344940_5F01_EFC4_41C7_7571D1A24A33_rollover.png",
   "class": "IconButton",
   "horizontalAlign": "center",
   "shadow": false,
   "pressedIconURL": "skin/IconButton_52344940_5F01_EFC4_41C7_7571D1A24A33_pressed.png",
   "borderSize": 0,
   "cursor": "hand",
   "id": "IconButton_52344940_5F01_EFC4_41C7_7571D1A24A33",
   "data": {
    "name": "Button53069"
   },
   "backgroundOpacity": 0,
   "minHeight": 0,
   "paddingBottom": 0,
   "iconURL": "skin/IconButton_52344940_5F01_EFC4_41C7_7571D1A24A33.png",
   "transparencyActive": true
  },
  "id": "MainViewerPanoramaPlayer",
  "buttonMoveRight": {
   "minWidth": 0,
   "paddingLeft": 0,
   "verticalAlign": "middle",
   "mode": "push",
   "paddingRight": 0,
   "height": 40,
   "width": 40,
   "borderRadius": 0,
   "paddingTop": 0,
   "rollOverIconURL": "skin/IconButton_52344940_5F01_EFC4_4184_BD88B8F3E7CC_rollover.png",
   "class": "IconButton",
   "horizontalAlign": "center",
   "shadow": false,
   "pressedIconURL": "skin/IconButton_52344940_5F01_EFC4_4184_BD88B8F3E7CC_pressed.png",
   "borderSize": 0,
   "cursor": "hand",
   "id": "IconButton_52344940_5F01_EFC4_4184_BD88B8F3E7CC",
   "data": {
    "name": "Button53068"
   },
   "backgroundOpacity": 0,
   "minHeight": 0,
   "paddingBottom": 0,
   "iconURL": "skin/IconButton_52344940_5F01_EFC4_4184_BD88B8F3E7CC.png",
   "transparencyActive": true
  },
  "buttonMoveUp": {
   "minWidth": 0,
   "paddingLeft": 0,
   "verticalAlign": "middle",
   "mode": "push",
   "paddingRight": 0,
   "height": 40,
   "width": 40,
   "borderRadius": 0,
   "paddingTop": 0,
   "rollOverIconURL": "skin/IconButton_52344940_5F01_EFC4_41B6_26FA0557CEC9_rollover.png",
   "class": "IconButton",
   "horizontalAlign": "center",
   "shadow": false,
   "pressedIconURL": "skin/IconButton_52344940_5F01_EFC4_41B6_26FA0557CEC9_pressed.png",
   "borderSize": 0,
   "cursor": "hand",
   "id": "IconButton_52344940_5F01_EFC4_41B6_26FA0557CEC9",
   "data": {
    "name": "Button53065"
   },
   "backgroundOpacity": 0,
   "minHeight": 0,
   "paddingBottom": 0,
   "iconURL": "skin/IconButton_52344940_5F01_EFC4_41B6_26FA0557CEC9.png",
   "transparencyActive": true
  },
  "buttonRestart": {
   "minWidth": 0,
   "paddingLeft": 0,
   "verticalAlign": "middle",
   "mode": "push",
   "paddingRight": 0,
   "height": 40,
   "width": 40,
   "borderRadius": 0,
   "paddingTop": 0,
   "rollOverIconURL": "skin/IconButton_52344940_5F01_EFC4_41BB_2A5E51966695_rollover.png",
   "class": "IconButton",
   "horizontalAlign": "center",
   "shadow": false,
   "pressedIconURL": "skin/IconButton_52344940_5F01_EFC4_41BB_2A5E51966695_pressed.png",
   "borderSize": 0,
   "cursor": "hand",
   "id": "IconButton_52344940_5F01_EFC4_41BB_2A5E51966695",
   "data": {
    "name": "Button53061"
   },
   "backgroundOpacity": 0,
   "minHeight": 0,
   "paddingBottom": 0,
   "iconURL": "skin/IconButton_52344940_5F01_EFC4_41BB_2A5E51966695.png",
   "transparencyActive": true
  },
  "mouseControlMode": "drag_acceleration",
  "buttonZoomOut": {
   "minWidth": 0,
   "paddingLeft": 0,
   "verticalAlign": "middle",
   "mode": "push",
   "paddingRight": 0,
   "height": 40,
   "width": 40,
   "borderRadius": 0,
   "paddingTop": 0,
   "rollOverIconURL": "skin/IconButton_52344940_5F01_EFC4_41D7_BE81DEFE8744_rollover.png",
   "class": "IconButton",
   "horizontalAlign": "center",
   "shadow": false,
   "pressedIconURL": "skin/IconButton_52344940_5F01_EFC4_41D7_BE81DEFE8744_pressed.png",
   "borderSize": 0,
   "cursor": "hand",
   "id": "IconButton_52344940_5F01_EFC4_41D7_BE81DEFE8744",
   "data": {
    "name": "Button53060"
   },
   "backgroundOpacity": 0,
   "minHeight": 0,
   "paddingBottom": 0,
   "iconURL": "skin/IconButton_52344940_5F01_EFC4_41D7_BE81DEFE8744.png",
   "transparencyActive": true
  },
  "buttonZoomIn": {
   "minWidth": 0,
   "paddingLeft": 0,
   "verticalAlign": "middle",
   "mode": "push",
   "paddingRight": 0,
   "height": 40,
   "width": 40,
   "borderRadius": 0,
   "paddingTop": 0,
   "rollOverIconURL": "skin/IconButton_52344940_5F01_EFC4_41BB_7EDA152A8375_rollover.png",
   "class": "IconButton",
   "horizontalAlign": "center",
   "shadow": false,
   "pressedIconURL": "skin/IconButton_52344940_5F01_EFC4_41BB_7EDA152A8375_pressed.png",
   "borderSize": 0,
   "cursor": "hand",
   "id": "IconButton_52344940_5F01_EFC4_41BB_7EDA152A8375",
   "data": {
    "name": "Button53071"
   },
   "backgroundOpacity": 0,
   "minHeight": 0,
   "paddingBottom": 0,
   "iconURL": "skin/IconButton_52344940_5F01_EFC4_41BB_7EDA152A8375.png",
   "transparencyActive": true
  },
  "gyroscopeVerticalDraggingEnabled": true,
  "displayPlaybackBar": true
 },
 {
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 5.31
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 5.31
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 5.31
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "id": "panorama_37A46412_3D2A_16DF_41BD_18BC1233FA77_camera",
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "class": "PlayList",
  "id": "mainPlayList",
  "items": [
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_37A46412_3D2A_16DF_41BD_18BC1233FA77",
    "class": "PanoramaPlayListItem",
    "end": "this.trigger('tourEnded')",
    "camera": "this.panorama_37A46412_3D2A_16DF_41BD_18BC1233FA77_camera"
   }
  ]
 },
 "this.popup_3331A4F3_3DEA_7F11_41CC_99269F06A67B",
 {
  "class": "ImageResource",
  "levels": [
   {
    "height": 749,
    "class": "ImageResourceLevel",
    "width": 1365,
    "url": "media/popup_3331A4F3_3DEA_7F11_41CC_99269F06A67B_0_0.jpg"
   },
   {
    "height": 561,
    "class": "ImageResourceLevel",
    "width": 1024,
    "url": "media/popup_3331A4F3_3DEA_7F11_41CC_99269F06A67B_0_1.jpg"
   },
   {
    "height": 280,
    "class": "ImageResourceLevel",
    "width": 512,
    "url": "media/popup_3331A4F3_3DEA_7F11_41CC_99269F06A67B_0_2.jpg"
   }
  ],
  "id": "ImageResource_32B74A03_3DEB_8AF1_41B5_81EF539DA611"
 }
], "children": [
 {
  "toolTipTextShadowOpacity": 0,
  "toolTipTextShadowBlurRadius": 3,
  "playbackBarProgressBackgroundColor": [
   "#222222",
   "#444444"
  ],
  "paddingRight": 0,
  "borderSize": 0,
  "playbackBarBorderSize": 2,
  "toolTipBackgroundColor": "#F6F6F6",
  "progressBorderRadius": 4,
  "toolTipShadowOpacity": 1,
  "playbackBarHeadShadow": true,
  "toolTipPaddingLeft": 6,
  "progressOpacity": 1,
  "playbackBarBorderRadius": 4,
  "playbackBarBackgroundOpacity": 1,
  "class": "ViewerArea",
  "playbackBarHeadShadowHorizontalLength": 0,
  "shadow": false,
  "playbackBarHeadShadowVerticalLength": 0,
  "toolTipShadowColor": "#333333",
  "playbackBarProgressBackgroundColorDirection": "vertical",
  "toolTipFontSize": 12,
  "progressBorderSize": 2,
  "playbackBarProgressBorderRadius": 0,
  "playbackBarBottom": 10,
  "playbackBarHeadShadowOpacity": 0.7,
  "progressLeft": 10,
  "borderRadius": 0,
  "progressBorderColor": "#AAAAAA",
  "minHeight": 50,
  "playbackBarHeadBorderSize": 0,
  "progressBackgroundOpacity": 1,
  "progressBackgroundColorDirection": "vertical",
  "playbackBarOpacity": 1,
  "toolTipShadowVerticalLength": 0,
  "playbackBarProgressOpacity": 1,
  "playbackBarHeadBorderRadius": 0,
  "toolTipTextShadowColor": "#000000",
  "paddingBottom": 0,
  "playbackBarHeight": 20,
  "toolTipShadowBlurRadius": 3,
  "playbackBarBackgroundColor": [
   "#EEEEEE",
   "#CCCCCC"
  ],
  "playbackBarProgressBorderColor": "#000000",
  "toolTipFontStyle": "normal",
  "progressBarBackgroundColorDirection": "vertical",
  "minWidth": 100,
  "playbackBarHeadBorderColor": "#000000",
  "paddingLeft": 0,
  "progressBackgroundColor": [
   "#EEEEEE",
   "#CCCCCC"
  ],
  "toolTipPaddingRight": 6,
  "progressBarOpacity": 1,
  "toolTipBorderSize": 1,
  "width": "100%",
  "toolTipPaddingBottom": 4,
  "toolTipShadowHorizontalLength": 0,
  "toolTipFontFamily": "Arial",
  "paddingTop": 0,
  "progressBackgroundColorRatios": [
   0,
   1
  ],
  "toolTipFontColor": "#606060",
  "height": "100%",
  "playbackBarProgressBorderSize": 0,
  "playbackBarLeft": 0,
  "playbackBarHeadHeight": 30,
  "playbackBarHeadBackgroundColor": [
   "#111111",
   "#666666"
  ],
  "playbackBarHeadWidth": 6,
  "playbackBarBackgroundColorDirection": "vertical",
  "progressBarBorderRadius": 4,
  "progressBottom": 1,
  "playbackBarRight": 0,
  "progressBarBorderColor": "#000000",
  "progressBarBackgroundColorRatios": [
   0,
   1
  ],
  "playbackBarHeadShadowColor": "#000000",
  "progressHeight": 20,
  "playbackBarHeadOpacity": 1,
  "toolTipFontWeight": "normal",
  "top": 0,
  "playbackBarHeadShadowBlurRadius": 3,
  "progressBarBackgroundColor": [
   "#222222",
   "#444444"
  ],
  "transitionMode": "blending",
  "toolTipDisplayTime": 600,
  "id": "MainViewer",
  "playbackBarProgressBackgroundColorRatios": [
   0,
   1
  ],
  "toolTipOpacity": 1,
  "playbackBarHeadBackgroundColorRatios": [
   0,
   1
  ],
  "transitionDuration": 500,
  "toolTipBorderRadius": 3,
  "toolTipShadowSpread": 0,
  "playbackBarHeadBackgroundColorDirection": "vertical",
  "left": 0,
  "progressBarBorderSize": 0,
  "toolTipPaddingTop": 4,
  "playbackBarBorderColor": "#AAAAAA",
  "progressRight": 10,
  "toolTipBorderColor": "#767676"
 },
 {
  "children": [
   {
    "children": [
     "this.IconButton_52344940_5F01_EFC4_41D7_BE81DEFE8744",
     "this.IconButton_52344940_5F01_EFC4_41BB_2A5E51966695",
     "this.IconButton_52344940_5F01_EFC4_41D4_A1CCD7021F0A",
     "this.IconButton_52344940_5F01_EFC4_41D0_C6DE67446A2C",
     {
      "children": [
       "this.IconButton_52344940_5F01_EFC4_41B6_26FA0557CEC9",
       "this.IconButton_52344940_5F01_EFC4_41CC_4A5BFB01C469",
       "this.IconButton_52344940_5F01_EFC4_41B5_303051AFBE15"
      ],
      "minWidth": 20,
      "paddingLeft": 0,
      "verticalAlign": "middle",
      "paddingRight": 0,
      "scrollBarColor": "#000000",
      "width": 40,
      "borderRadius": 0,
      "paddingTop": 0,
      "gap": 4,
      "class": "Container",
      "scrollBarWidth": 10,
      "height": "100%",
      "horizontalAlign": "center",
      "shadow": false,
      "borderSize": 0,
      "scrollBarMargin": 2,
      "id": "Container_52344940_5F01_EFC4_41D6_7E3303CC9C74",
      "data": {
       "name": "Container53064"
      },
      "backgroundOpacity": 0,
      "minHeight": 20,
      "layout": "vertical",
      "creationPolicy": "delayed",
      "scrollBarOpacity": 0.5,
      "paddingBottom": 0,
      "scrollBarVisible": "rollOver",
      "contentOpaque": false,
      "overflow": "hidden"
     },
     "this.IconButton_52344940_5F01_EFC4_4184_BD88B8F3E7CC",
     "this.IconButton_52344940_5F01_EFC4_41C7_7571D1A24A33",
     {
      "minWidth": 0,
      "paddingLeft": 0,
      "verticalAlign": "middle",
      "mode": "toggle",
      "paddingRight": 0,
      "height": 40,
      "width": 40,
      "borderRadius": 0,
      "paddingTop": 0,
      "class": "IconButton",
      "horizontalAlign": "center",
      "shadow": false,
      "pressedIconURL": "skin/IconButton_52344940_5F01_EFC4_41CC_9E18548B3CCC_pressed.png",
      "borderSize": 0,
      "cursor": "hand",
      "id": "IconButton_52344940_5F01_EFC4_41CC_9E18548B3CCC",
      "data": {
       "name": "Button53070"
      },
      "backgroundOpacity": 0,
      "minHeight": 0,
      "paddingBottom": 0,
      "iconURL": "skin/IconButton_52344940_5F01_EFC4_41CC_9E18548B3CCC.png",
      "transparencyActive": true
     },
     "this.IconButton_52344940_5F01_EFC4_41BB_7EDA152A8375"
    ],
    "minWidth": 421,
    "paddingLeft": 0,
    "verticalAlign": "middle",
    "paddingRight": 0,
    "scrollBarColor": "#000000",
    "width": 421,
    "borderRadius": 0,
    "paddingTop": 0,
    "gap": 4,
    "class": "Container",
    "scrollBarWidth": 10,
    "height": "100%",
    "horizontalAlign": "center",
    "shadow": false,
    "borderSize": 0,
    "scrollBarMargin": 2,
    "id": "Container_52344940_5F01_EFC4_41D4_ABA40101D8BF",
    "data": {
     "name": "Container53059"
    },
    "backgroundOpacity": 0,
    "minHeight": 20,
    "layout": "horizontal",
    "creationPolicy": "delayed",
    "paddingBottom": 0,
    "scrollBarOpacity": 0.5,
    "scrollBarVisible": "rollOver",
    "contentOpaque": false,
    "overflow": "hidden"
   }
  ],
  "minWidth": 1,
  "paddingLeft": 0,
  "verticalAlign": "middle",
  "paddingRight": 0,
  "scrollBarColor": "#000000",
  "borderRadius": 0,
  "height": 142,
  "width": "100%",
  "paddingTop": 0,
  "gap": 10,
  "class": "Container",
  "scrollBarWidth": 10,
  "borderSize": 0,
  "horizontalAlign": "center",
  "shadow": false,
  "scrollBarMargin": 2,
  "data": {
   "name": "Container44746"
  },
  "bottom": "0%",
  "backgroundOpacity": 0,
  "minHeight": 1,
  "layout": "horizontal",
  "left": "0%",
  "paddingBottom": 0,
  "creationPolicy": "delayed",
  "scrollBarVisible": "rollOver",
  "scrollBarOpacity": 0.5,
  "contentOpaque": false,
  "overflow": "scroll"
 },
 {
  "minWidth": 0,
  "backgroundColorDirection": "vertical",
  "paddingLeft": 0,
  "paddingRight": 0,
  "backgroundColor": [
   "#000000"
  ],
  "backgroundColorRatios": [
   0
  ],
  "paddingTop": 0,
  "class": "UIComponent",
  "shadow": false,
  "borderSize": 0,
  "top": 0,
  "visible": false,
  "bottom": 0,
  "id": "veilPopupPanorama",
  "borderRadius": 0,
  "backgroundOpacity": 0.55,
  "showEffect": {
   "class": "FadeInEffect",
   "easing": "cubic_in_out",
   "duration": 350
  },
  "minHeight": 0,
  "paddingBottom": 0,
  "left": 0,
  "data": {
   "name": "UIComponent5018"
  },
  "right": 0
 },
 {
  "minWidth": 0,
  "backgroundColorDirection": "vertical",
  "paddingLeft": 0,
  "paddingRight": 0,
  "backgroundColor": [],
  "backgroundColorRatios": [],
  "paddingTop": 0,
  "class": "ZoomImage",
  "scaleMode": "custom",
  "shadow": false,
  "borderSize": 0,
  "top": 0,
  "visible": false,
  "bottom": 0,
  "id": "zoomImagePopupPanorama",
  "borderRadius": 0,
  "backgroundOpacity": 1,
  "data": {
   "name": "ZoomImage5019"
  },
  "minHeight": 0,
  "paddingBottom": 0,
  "left": 0,
  "right": 0
 },
 {
  "iconHeight": 20,
  "minWidth": 0,
  "backgroundColorDirection": "vertical",
  "paddingLeft": 5,
  "verticalAlign": "middle",
  "borderRadius": 0,
  "iconColor": "#000000",
  "fontSize": 12,
  "mode": "push",
  "paddingRight": 5,
  "backgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "backgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "textDecoration": "none",
  "paddingTop": 5,
  "gap": 5,
  "class": "CloseButton",
  "fontFamily": "Arial",
  "fontStyle": "normal",
  "horizontalAlign": "center",
  "shadow": false,
  "borderSize": 0,
  "fontWeight": "normal",
  "rollOverIconColor": "#666666",
  "top": 10,
  "cursor": "hand",
  "iconWidth": 20,
  "visible": false,
  "iconLineWidth": 5,
  "id": "closeButtonPopupPanorama",
  "borderColor": "#000000",
  "showEffect": {
   "class": "FadeInEffect",
   "easing": "cubic_in_out",
   "duration": 350
  },
  "fontColor": "#FFFFFF",
  "backgroundOpacity": 0.3,
  "shadowSpread": 1,
  "pressedIconColor": "#888888",
  "minHeight": 0,
  "shadowColor": "#000000",
  "label": "",
  "paddingBottom": 5,
  "shadowBlurRadius": 6,
  "iconBeforeLabel": true,
  "data": {
   "name": "CloseButton5020"
  },
  "layout": "horizontal",
  "right": 10
 }
], 
 "minWidth": 20,
 "paddingLeft": 0,
 "verticalAlign": "top",
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "width": "100%",
 "paddingTop": 0,
 "borderRadius": 0,
 "gap": 10,
 "class": "Player",
 "scrollBarWidth": 10,
 "mobileMipmappingEnabled": false,
 "vrPolyfillScale": 0.5,
 "height": "100%",
 "horizontalAlign": "left",
 "buttonToggleMute": "this.IconButton_52344940_5F01_EFC4_41CC_9E18548B3CCC",
 "shadow": false,
 "borderSize": 0,
 "scrollBarMargin": 2,
 "scripts": {
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); self.resumeGlobalAudios(); }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); this.pauseGlobalAudios(); popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var button = player.get('buttonPlayPause'); if(typeof button !== 'undefined' && player.get('state') == 'playing'){ button.set('pressed', true); } },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "openLink": function(url, name){  if(url == location.href) { return; } if (name == '_blank' && window && window.process && window.process.versions && window.process.versions['electron']){ if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf') { var shell = require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ if(items[i].get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return; } } },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "showPopupPanoramaOverlay": function(popupPanoramaOverlay, closeButtonProperties, imageHD, toggleImage, toggleImageHD, autoCloseMilliSeconds, audio, stopBackgroundAudio){  var self = this; this.MainViewer.set('toolTipEnabled', false); var cardboardEnabled = this.isCardboardViewMode(); if(!cardboardEnabled) { var zoomImage = this.zoomImagePopupPanorama; var showDuration = popupPanoramaOverlay.get('showDuration'); var hideDuration = popupPanoramaOverlay.get('hideDuration'); var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); var popupMaxWidthBackup = popupPanoramaOverlay.get('popupMaxWidth'); var popupMaxHeightBackup = popupPanoramaOverlay.get('popupMaxHeight'); var showEndFunction = function() { var loadedFunction = function(){ if(!self.isCardboardViewMode()) popupPanoramaOverlay.set('visible', false); }; popupPanoramaOverlay.unbind('showEnd', showEndFunction, self); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', 1); self.showPopupImage(imageHD, toggleImageHD, popupPanoramaOverlay.get('popupMaxWidth'), popupPanoramaOverlay.get('popupMaxHeight'), null, null, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedFunction, hideFunction); }; var hideFunction = function() { var restoreShowDurationFunction = function(){ popupPanoramaOverlay.unbind('showEnd', restoreShowDurationFunction, self); popupPanoramaOverlay.set('visible', false); popupPanoramaOverlay.set('showDuration', showDuration); popupPanoramaOverlay.set('popupMaxWidth', popupMaxWidthBackup); popupPanoramaOverlay.set('popupMaxHeight', popupMaxHeightBackup); }; self.resumePlayers(playersPaused, audio == null || !stopBackgroundAudio); var currentWidth = zoomImage.get('imageWidth'); var currentHeight = zoomImage.get('imageHeight'); popupPanoramaOverlay.bind('showEnd', restoreShowDurationFunction, self, true); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', hideDuration); popupPanoramaOverlay.set('popupMaxWidth', currentWidth); popupPanoramaOverlay.set('popupMaxHeight', currentHeight); if(popupPanoramaOverlay.get('visible')) restoreShowDurationFunction(); else popupPanoramaOverlay.set('visible', true); self.MainViewer.set('toolTipEnabled', true); }; if(!imageHD){ imageHD = popupPanoramaOverlay.get('image'); } if(!toggleImageHD && toggleImage){ toggleImageHD = toggleImage; } popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); } else { var hideEndFunction = function() { self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } popupPanoramaOverlay.unbind('hideEnd', hideEndFunction, self); self.MainViewer.set('toolTipEnabled', true); }; var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } popupPanoramaOverlay.bind('hideEnd', hideEndFunction, this, true); } popupPanoramaOverlay.set('visible', true); },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var resizeFunction = function(){ setTimeout(setCloseButtonPosition, 0); }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); zoomImage.bind('resize', resizeFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); zoomImage.unbind('resize', resizeFunction, this); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "shareGoogle": function(url){  window.open('https://plus.google.com/share?url=' + url, '_blank'); },
  "changePlayListWithSameSpot": function(playList, newIndex){  var currentIndex = playList.get('selectedIndex'); if (currentIndex >= 0 && newIndex >= 0 && currentIndex != newIndex) { var currentItem = playList.get('items')[currentIndex]; var newItem = playList.get('items')[newIndex]; var currentPlayer = currentItem.get('player'); var newPlayer = newItem.get('player'); if ((currentPlayer.get('class') == 'PanoramaPlayer' || currentPlayer.get('class') == 'Video360Player') && (newPlayer.get('class') == 'PanoramaPlayer' || newPlayer.get('class') == 'Video360Player')) { var newCamera = this.cloneCamera(newItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, currentItem.get('media')); this.startPanoramaWithCamera(newItem.get('media'), newCamera); } } },
  "setMainMediaByIndex": function(index){  if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); } },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "changeBackgroundWhilePlay": function(playList, index, color){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ playList.unbind('change', changeFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playList.bind('change', changeFunction, this); } },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else if(player.get('state') == 'playing') { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "autotriggerAtStart": function(player, callback){  var stateChangeFunction = function(event){ if(event.data.state == 'playing'){ callback(); player.unbind('stateChange', stateChangeFunction, this); } }; player.bind('stateChange', stateChangeFunction, this); },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, containsAudio){  var self = this; var closeFunction = function(){ self.MainViewer.set('toolTipEnabled', true); this.resumePlayers(playersPaused, !containsAudio); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = media.get('width'); var mediaHeight = media.get('height'); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = w.get('footerHeight'); var headerHeight = w.get('headerHeight'); if(!headerHeight) { var closeButtonHeight = w.get('closeButtonIconHeight') + w.get('closeButtonPaddingTop') + w.get('closeButtonPaddingBottom'); var titleHeight = w.get('titleFontSize') + w.get('titlePaddingTop') + w.get('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += w.get('headerPaddingTop') + w.get('headerPaddingBottom'); } if(!footerHeight) { footerHeight = 0; } var contentWindowWidth = windowWidth - w.get('bodyPaddingLeft') - w.get('bodyPaddingRight') - w.get('paddingLeft') - w.get('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - w.get('bodyPaddingTop') - w.get('bodyPaddingBottom') - w.get('paddingTop') - w.get('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + w.get('bodyPaddingLeft') + w.get('bodyPaddingRight') + w.get('paddingLeft') + w.get('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + w.get('bodyPaddingTop') + w.get('bodyPaddingBottom') + w.get('paddingTop') + w.get('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - w.get('actualWidth')) * 0.5); w.set('y', (parentHeight - w.get('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var isVideo = media.get('class') == 'Video'; if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "setStartTimeVideoSync": function(media, player){  this.setStartTimeVideo(media, player.get('currentTime')); },
  "getPanoramaOverlayByName": function(panorama, name){  var frames = panorama.get('frames'); for(var j = 0; j<frames.length; ++j){ var frame = frames[j]; var overlays = frame.get('overlays'); for(var i = 0, count = overlays.length; i<count; ++i){ var overlay = overlays[i]; var data = overlay.get('data'); if(data != undefined && data.label == name){ return overlay; } } } return undefined; },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "getKey": function(key){  return window[key]; },
  "pauseGlobalAudios": function(caller, excludeAudios){  var audios = window.currentGlobalAudios; window.currentGlobalAudiosActionCaller = caller; if(!audios) return; for(var audio in audios){ var a = audios[audio]; if(a.get('state') == 'playing' && (excludeAudios == undefined || excludeAudios.indexOf(a) == -1)) a.pause(); } },
  "existsKey": function(key){  return key in window; },
  "setCameraSameSpotAsMedia": function(camera, media){  var player = this.getCurrentPlayerWithMedia(media); if(player != undefined) { var position = camera.get('initialPosition'); position.set('yaw', player.get('yaw')); position.set('pitch', player.get('pitch')); position.set('hfov', player.get('hfov')); } },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); } },
  "unregisterKey": function(key){  delete window[key]; },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "resumeGlobalAudios": function(caller, excludeAudios){  if(window.currentGlobalAudiosActionCaller && window.currentGlobalAudiosActionCaller != caller) return; window.currentGlobalAudiosActionCaller = undefined; var audios = window.currentGlobalAudios; if(!audios) return; for(var audio in audios){ var a = audios[audio]; if(excludeAudios == undefined || excludeAudios.indexOf(a) == -1) audios[audio].play(); } },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, caller){  var audios = window.currentGlobalAudios; if(!audios) return; var resumeFunction = this.resumeGlobalAudios; var endFunction = function(){ if(playList.get('selectedIndex') != index) { resumeFunction(caller); } }; this.pauseGlobalAudios(caller); this.executeFunctionWhenChange(playList, index, endFunction, endFunction); },
  "setStartTimeVideo": function(media, time){  var items = this.getPlayListItems(media); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "setPanoramaCameraWithSpot": function(playListItem, yaw, pitch){  var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); var initialPosition = newCamera.get('initialPosition'); initialPosition.set('yaw', yaw); initialPosition.set('pitch', pitch); this.startPanoramaWithCamera(panorama, newCamera); },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "registerKey": function(key, value){  window[key] = value; },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var self = this; var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction(); if(endFunction && endObject) endObject.unbind('end', endFunction, self); playList.unbind('change', changePlayListFunction, self); } }; if(endFunction){ var playListItem = playList.get('items')[index]; var playListItemClass = playListItem.get('class'); if(playListItemClass == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); endObject = camera.get('initialSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "getMediaByName": function(name){  var list = this.getByClassName('Media'); for(var i = 0, count = list.length; i<count; ++i){ var media = list[i]; if((media.get('class') == 'Audio' && media.get('data').label == name) || media.get('label') == name){ return media; } } return undefined; },
  "setPanoramaCameraWithCurrentSpot": function(playListItem){  var currentPlayer = this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer == undefined){ return; } var playerClass = currentPlayer.get('class'); if(playerClass != 'PanoramaPlayer' && playerClass != 'Video360Player'){ return; } var fromMedia = currentPlayer.get('panorama'); if(fromMedia == undefined) { fromMedia = currentPlayer.get('video'); } var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, fromMedia); this.startPanoramaWithCamera(panorama, newCamera); },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media) return playList; } } return undefined; },
  "cloneCamera": function(camera){  var newCamera = this.rootPlayer.createInstance(camera.get('class')); newCamera.set('id', camera.get('id') + '_copy'); newCamera.set('idleSequence', camera.get('initialSequence')); return newCamera; },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('html') == '' || component.get('html') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchEnabled') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "getComponentByName": function(name){  var list = this.getByClassName('UIComponent'); for(var i = 0, count = list.length; i<count; ++i){ var component = list[i]; var data = component.get('data'); if(data != undefined && data.name == name){ return component; } } return undefined; },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose(true); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose(false); } }; var disposeCallback = function(){ dispose(false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, self); }; itemDispatcher.bind('end', restoreInitialPositionFunction, self); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } playListDispatcher.set('selectedIndex', indexDispatcher); if(player){ player.unbind('stateChange', stateChangeFunction, self); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, self); } } if(sameViewerArea){ if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, self); } else{ viewerArea.set('visible', false); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { var playerClass = currentPlayer.get('class'); if(playerClass == 'PanoramaPlayer') { mediaDispatcher = currentPlayer.get('panorama'); if(mediaDispatcher == undefined) medisDispatcher = currentPlayer.get('video'); } else if(playerClass == 'VideoPlayer' || playerClass == 'Video360Player') mediaDispatcher = currentPlayer.get('video'); else if(playerClass == 'PhotoAlbumPlayer') mediaDispatcher = currentPlayer.get('photoAlbum'); else if(playerClass == 'MapPlayer') mediaDispatcher = currentPlayer.get('map'); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var viewerArea = item.get('player').get('viewerArea'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var player = undefined; var buttons = []; if(item.get('player') != itemDispatcher.get('player') || !mediaDispatcherByParam){ player = item.get('player'); if(player.get('class') == 'PanoramaPlayer' && item.get('media').get('class') != 'Video360') { var addButtons = function(property){ var value = player.get(property); if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } } else { setTimeout(function(){player.bind('stateChange', stateChangeFunction, self)}, 100); } } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } this.playGlobalAudio(audio, endCallback); },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "startPanoramaWithCamera": function(media, camera){  if(window.currentPanoramasWithCameraChanged != undefined && window.currentPanoramasWithCameraChanged.indexOf(media) != -1){ return; } var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media && (item.get('class') == 'PanoramaPlayListItem' || item.get('class') == 'Video360PlayListItem')){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { if(window.currentPanoramasWithCameraChanged == undefined) { window.currentPanoramasWithCameraChanged = [media]; } else { window.currentPanoramasWithCameraChanged.push(media); } var restoreCameraOnStop = function(){ var index = window.currentPanoramasWithCameraChanged.indexOf(media); if(index != -1) { window.currentPanoramasWithCameraChanged.splice(index, 1); } for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); restoreItems[i].item.unbind('stop', restoreCameraOnStop, this); } }; for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.bind('stop', restoreCameraOnStop, this); } } }
 },
 "mouseWheelEnabled": true,
 "id": "rootPlayer",
 "data": {
  "name": "Player43899"
 },
 "minHeight": 20,
 "layout": "absolute",
 "paddingBottom": 0,
 "creationPolicy": "delayed",
 "backgroundPreloadEnabled": true,
 "scrollBarOpacity": 0.5,
 "start": "this.mainPlayList.set('selectedIndex', 0)",
 "scrollBarVisible": "rollOver",
 "contentOpaque": false,
 "overflow": "visible"
})