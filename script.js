(function(){
    var script = {
 "mouseWheelEnabled": true,
 "start": "this.playAudioList([this.audio_BF36B4B6_9F5B_1CA0_41DE_D1CFA6A477A0]); this.init(); this.syncPlaylists([this.playList_8A110B50_9FAD_15E0_41C4_59428D39A8DF,this.mainPlayList])",
 "layout": "absolute",
 "scrollBarWidth": 10,
 "id": "rootPlayer",
 "mobileMipmappingEnabled": false,
 "vrPolyfillScale": 0.73,
 "propagateClick": false,
 "scrollBarColor": "#000000",
 "horizontalAlign": "left",
 "backgroundPreloadEnabled": true,
 "scrollBarOpacity": 0.5,
 "children": [
  "this.MainViewer",
  {
   "propagateClick": false,
   "layout": "horizontal",
   "children": [
    {
     "maxHeight": 600,
     "backgroundColorRatios": [
      0
     ],
     "itemThumbnailShadowColor": "#000000",
     "horizontalAlign": "left",
     "itemLabelFontStyle": "normal",
     "scrollBarOpacity": 0.5,
     "scrollBarColor": "#FFFFFF",
     "itemThumbnailWidth": 100,
     "itemMode": "normal",
     "scrollBarVisible": "rollOver",
     "itemLabelHorizontalAlign": "center",
     "borderSize": 0,
     "itemThumbnailOpacity": 1,
     "itemPaddingRight": 3,
     "backgroundColorDirection": "vertical",
     "itemLabelFontWeight": "normal",
     "itemLabelTextDecoration": "none",
     "minHeight": 0,
     "selectedItemLabelFontWeight": "bold",
     "itemThumbnailShadowOpacity": 0.8,
     "playList": "this.playList_8A110B50_9FAD_15E0_41C4_59428D39A8DF",
     "itemBorderRadius": 0,
     "itemLabelFontFamily": "Arial",
     "paddingRight": 20,
     "itemThumbnailShadowBlurRadius": 4,
     "scrollBarMargin": 2,
     "itemLabelFontSize": 14,
     "minWidth": 0,
     "itemThumbnailScaleMode": "fit_outside",
     "verticalAlign": "top",
     "backgroundColor": [
      "#000000"
     ],
     "itemVerticalAlign": "middle",
     "itemLabelFontColor": "#FFFFFF",
     "itemHorizontalAlign": "center",
     "itemLabelPosition": "bottom",
     "itemPaddingLeft": 3,
     "itemOpacity": 1,
     "class": "ThumbnailList",
     "itemThumbnailHeight": 75,
     "itemThumbnailShadowSpread": 1,
     "itemBackgroundColorDirection": "vertical",
     "itemBackgroundOpacity": 0,
     "paddingLeft": 20,
     "backgroundOpacity": 0.2,
     "gap": 10,
     "shadow": false,
     "itemThumbnailShadow": true,
     "itemThumbnailShadowVerticalLength": 3,
     "itemThumbnailBorderRadius": 5,
     "paddingBottom": 10,
     "itemThumbnailShadowHorizontalLength": 3,
     "borderRadius": 5,
     "itemBackgroundColor": [],
     "itemPaddingBottom": 3,
     "itemPaddingTop": 3,
     "paddingTop": 10,
     "itemLabelGap": 5,
     "scrollBarWidth": 10,
     "itemBackgroundColorRatios": [],
     "maxWidth": 800,
     "data": {
      "name": "ThumbnailList515"
     },
     "propagateClick": false,
     "layout": "horizontal"
    }
   ],
   "horizontalAlign": "center",
   "left": 0,
   "scrollBarColor": "#000000",
   "right": 0,
   "scrollBarOpacity": 0.5,
   "borderSize": 0,
   "scrollBarVisible": "rollOver",
   "minHeight": 20,
   "verticalAlign": "bottom",
   "paddingRight": 0,
   "bottom": 0,
   "contentOpaque": false,
   "minWidth": 20,
   "scrollBarMargin": 2,
   "height": 200,
   "class": "Container",
   "paddingLeft": 0,
   "gap": 10,
   "shadow": false,
   "backgroundOpacity": 0,
   "paddingBottom": 0,
   "borderRadius": 0,
   "paddingTop": 0,
   "overflow": "visible",
   "scrollBarWidth": 10,
   "data": {
    "name": "Container514"
   }
  }
 ],
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "desktopMipmappingEnabled": false,
 "minHeight": 20,
 "scripts": {
  "getMediaFromPlayer": function(player){  switch(player.get('class')){ case 'PanoramaPlayer': return player.get('panorama') || player.get('video'); case 'VideoPlayer': case 'Video360Player': return player.get('video'); case 'PhotoAlbumPlayer': return player.get('photoAlbum'); case 'MapPlayer': return player.get('map'); } },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ var item = items[i]; if(item.get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return item; } } },
  "setCameraSameSpotAsMedia": function(camera, media){  var player = this.getCurrentPlayerWithMedia(media); if(player != undefined) { var position = camera.get('initialPosition'); position.set('yaw', player.get('yaw')); position.set('pitch', player.get('pitch')); position.set('hfov', player.get('hfov')); } },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "startPanoramaWithCamera": function(media, camera){  if(window.currentPanoramasWithCameraChanged != undefined && window.currentPanoramasWithCameraChanged.indexOf(media) != -1){ return; } var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media && (item.get('class') == 'PanoramaPlayListItem' || item.get('class') == 'Video360PlayListItem')){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { if(window.currentPanoramasWithCameraChanged == undefined) { window.currentPanoramasWithCameraChanged = [media]; } else { window.currentPanoramasWithCameraChanged.push(media); } var restoreCameraOnStop = function(){ var index = window.currentPanoramasWithCameraChanged.indexOf(media); if(index != -1) { window.currentPanoramasWithCameraChanged.splice(index, 1); } for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); restoreItems[i].item.unbind('stop', restoreCameraOnStop, this); } }; for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.bind('stop', restoreCameraOnStop, this); } } },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "cloneCamera": function(camera){  var newCamera = this.rootPlayer.createInstance(camera.get('class')); newCamera.set('id', camera.get('id') + '_copy'); newCamera.set('idleSequence', camera.get('initialSequence')); return newCamera; },
  "getPlayListItemByMedia": function(playList, media){  var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media) return item; } return undefined; },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction.call(this); if(endFunction && endObject) endObject.unbind('end', endFunction, this); playList.unbind('change', changePlayListFunction, this); } }; if(endFunction){ var playListItem = playList.get('items')[index]; if(playListItem.get('class') == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); if(camera != undefined) endObject = camera.get('initialSequence'); if(endObject == undefined) endObject = camera.get('idleSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "changePlayListWithSameSpot": function(playList, newIndex){  var currentIndex = playList.get('selectedIndex'); if (currentIndex >= 0 && newIndex >= 0 && currentIndex != newIndex) { var currentItem = playList.get('items')[currentIndex]; var newItem = playList.get('items')[newIndex]; var currentPlayer = currentItem.get('player'); var newPlayer = newItem.get('player'); if ((currentPlayer.get('class') == 'PanoramaPlayer' || currentPlayer.get('class') == 'Video360Player') && (newPlayer.get('class') == 'PanoramaPlayer' || newPlayer.get('class') == 'Video360Player')) { var newCamera = this.cloneCamera(newItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, currentItem.get('media')); this.startPanoramaWithCamera(newItem.get('media'), newCamera); } } },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return audio; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); var stateChangeFunctions = audio.getBindings('stateChange'); for(var i = 0; i<stateChangeFunctions.length; ++i){ var f = stateChangeFunctions[i]; if(typeof f == 'string') f = new Function('event', f); panoramaAudio.bind('stateChange', f, this); } audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } return this.playGlobalAudio(audio, endCallback); },
  "getComponentByName": function(name){  var list = this.getByClassName('UIComponent'); for(var i = 0, count = list.length; i<count; ++i){ var component = list[i]; var data = component.get('data'); if(data != undefined && data.name == name){ return component; } } return undefined; },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('html') == '' || component.get('html') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchDevice') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, stopAudios){  var self = this; var closeFunction = function(){ playList.set('selectedIndex', -1); self.MainViewer.set('toolTipEnabled', true); if(stopAudios) { self.resumeGlobalAudios(); } this.resumePlayers(playersPaused, !stopAudios); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var getWinValue = function(property){ return w.get(property) || 0; }; var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = self.getMediaWidth(media); var mediaHeight = self.getMediaHeight(media); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = getWinValue('footerHeight'); var headerHeight = getWinValue('headerHeight'); if(!headerHeight) { var closeButtonHeight = getWinValue('closeButtonIconHeight') + getWinValue('closeButtonPaddingTop') + getWinValue('closeButtonPaddingBottom'); var titleHeight = self.getPixels(getWinValue('titleFontSize')) + getWinValue('titlePaddingTop') + getWinValue('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += getWinValue('headerPaddingTop') + getWinValue('headerPaddingBottom'); } var contentWindowWidth = windowWidth - getWinValue('bodyPaddingLeft') - getWinValue('bodyPaddingRight') - getWinValue('paddingLeft') - getWinValue('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - getWinValue('bodyPaddingTop') - getWinValue('bodyPaddingBottom') - getWinValue('paddingTop') - getWinValue('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + getWinValue('bodyPaddingLeft') + getWinValue('bodyPaddingRight') + getWinValue('paddingLeft') + getWinValue('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + getWinValue('bodyPaddingTop') + getWinValue('bodyPaddingBottom') + getWinValue('paddingTop') + getWinValue('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - getWinValue('actualWidth')) * 0.5); w.set('y', (parentHeight - getWinValue('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var mediaClass = media.get('class'); var isVideo = mediaClass == 'Video' || mediaClass == 'Video360'; playList.set('selectedIndex', 0); if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); playList.get('items')[0].get('player').play(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); if(stopAudios) { this.pauseGlobalAudios(); } var playersPaused = this.pauseCurrentPlayers(!stopAudios); w.bind('close', closeFunction, this); w.show(this, true); },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "resumeGlobalAudios": function(caller){  if (window.pauseGlobalAudiosState == undefined || !(caller in window.pauseGlobalAudiosState)) return; var audiosPaused = window.pauseGlobalAudiosState[caller]; delete window.pauseGlobalAudiosState[caller]; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = audiosPaused.length-1; j>=0; --j) { var a = audiosPaused[j]; if(objAudios.indexOf(a) != -1) audiosPaused.splice(j, 1); } } for (var i = 0, count = audiosPaused.length; i<count; ++i) { var a = audiosPaused[i]; if (a.get('state') == 'paused') a.play(); } },
  "getMediaHeight": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxH=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('height') > maxH) maxH = r.get('height'); } return maxH; }else{ return r.get('height') } default: return media.get('height'); } },
  "setMainMediaByIndex": function(index){  var item = undefined; if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); item = this.mainPlayList.get('items')[index]; } return item; },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, exclude){  var self = this; var item = playList.get('items')[index]; var media = item.get('media'); var player = item.get('player'); var caller = media.get('id'); var endFunc = function(){ if(playList.get('selectedIndex') != index) { if(hasState){ player.unbind('stateChange', stateChangeFunc, self); } self.resumeGlobalAudios(caller); } }; var stateChangeFunc = function(event){ var state = event.data.state; if(state == 'stopped'){ this.resumeGlobalAudios(caller); } else if(state == 'playing'){ this.pauseGlobalAudios(caller, exclude); } }; var mediaClass = media.get('class'); var hasState = mediaClass == 'Video360' || mediaClass == 'Video'; if(hasState){ player.bind('stateChange', stateChangeFunc, this); } this.pauseGlobalAudios(caller, exclude); this.executeFunctionWhenChange(playList, index, endFunc, endFunc); },
  "getPanoramaOverlayByName": function(panorama, name){  var overlays = this.getOverlays(panorama); for(var i = 0, count = overlays.length; i<count; ++i){ var overlay = overlays[i]; var data = overlay.get('data'); if(data != undefined && data.label == name){ return overlay; } } return undefined; },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "keepComponentVisibility": function(component, keep){  var key = 'keepVisibility_' + component.get('id'); var value = this.getKey(key); if(value == undefined && keep) { this.registerKey(key, keep); } else if(value != undefined && !keep) { this.unregisterKey(key); } },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "shareWhatsapp": function(url){  window.open('https://api.whatsapp.com/send/?text=' + encodeURIComponent(url), '_blank'); },
  "registerKey": function(key, value){  window[key] = value; },
  "getPixels": function(value){  var result = new RegExp('((\\+|\\-)?\\d+(\\.\\d*)?)(px|vw|vh|vmin|vmax)?', 'i').exec(value); if (result == undefined) { return 0; } var num = parseFloat(result[1]); var unit = result[4]; var vw = this.rootPlayer.get('actualWidth') / 100; var vh = this.rootPlayer.get('actualHeight') / 100; switch(unit) { case 'vw': return num * vw; case 'vh': return num * vh; case 'vmin': return num * Math.min(vw, vh); case 'vmax': return num * Math.max(vw, vh); default: return num; } },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var buttons = player.get('buttonPlayPause'); if(typeof buttons !== 'undefined' && player.get('state') == 'playing'){ if(!Array.isArray(buttons)) buttons = [buttons]; for(var i = 0; i<buttons.length; ++i) buttons[i].set('pressed', true); } },
  "init": function(){  if(!Object.hasOwnProperty('values')) { Object.values = function(o){ return Object.keys(o).map(function(e) { return o[e]; }); }; } var history = this.get('data')['history']; var playListChangeFunc = function(e){ var playList = e.source; var index = playList.get('selectedIndex'); if(index < 0) return; var id = playList.get('id'); if(!history.hasOwnProperty(id)) history[id] = new HistoryData(playList); history[id].add(index); }; var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i) { var playList = playLists[i]; playList.bind('change', playListChangeFunc, this); } },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return audio; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); return audio; },
  "setPanoramaCameraWithSpot": function(playListItem, yaw, pitch){  var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); var initialPosition = newCamera.get('initialPosition'); initialPosition.set('yaw', yaw); initialPosition.set('pitch', pitch); this.startPanoramaWithCamera(panorama, newCamera); },
  "pauseGlobalAudios": function(caller, exclude){  if (window.pauseGlobalAudiosState == undefined) window.pauseGlobalAudiosState = {}; if (window.pauseGlobalAudiosList == undefined) window.pauseGlobalAudiosList = []; if (caller in window.pauseGlobalAudiosState) { return; } var audios = this.getByClassName('Audio').concat(this.getByClassName('VideoPanoramaOverlay')); if (window.currentGlobalAudios != undefined) audios = audios.concat(Object.values(window.currentGlobalAudios)); var audiosPaused = []; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = 0; j<objAudios.length; ++j) { var a = objAudios[j]; if(audiosPaused.indexOf(a) == -1) audiosPaused.push(a); } } window.pauseGlobalAudiosState[caller] = audiosPaused; for (var i = 0, count = audios.length; i < count; ++i) { var a = audios[i]; if (a.get('state') == 'playing' && (exclude == undefined || exclude.indexOf(a) == -1)) { a.pause(); audiosPaused.push(a); } } },
  "getMediaWidth": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxW=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('width') > maxW) maxW = r.get('width'); } return maxW; }else{ return r.get('width') } default: return media.get('width'); } },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  var keepVisibility = this.getKey('keepVisibility_' + component.get('id')); if(keepVisibility) return; this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "stopAndGoCamera": function(camera, ms){  var sequence = camera.get('initialSequence'); sequence.pause(); var timeoutFunction = function(){ sequence.play(); }; setTimeout(timeoutFunction, ms); },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose.call(this, true); } }; var onBeginFunction = function() { item.unbind('begin', onBeginFunction, self); var media = item.get('media'); if(media.get('class') != 'Panorama' || (media.get('camera') != undefined && media.get('camera').get('initialSequence') != undefined)){ player.bind('stateChange', stateChangeFunction, self); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose.call(this, false); } }; var disposeCallback = function(){ dispose.call(this, false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, this); }; itemDispatcher.bind('end', restoreInitialPositionFunction, this); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } if(player){ item.unbind('begin', onBeginFunction, this); player.unbind('stateChange', stateChangeFunction, this); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, this); } } if(sameViewerArea){ var currentMedia = this.getMediaFromPlayer(player); if(currentMedia == undefined || currentMedia == item.get('media')){ playListDispatcher.set('selectedIndex', indexDispatcher); } if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, this); } else{ viewerArea.set('visible', viewerVisibility); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { mediaDispatcher = this.getMediaFromPlayer(currentPlayer); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var player = item.get('player'); var viewerArea = player.get('viewerArea'); var viewerVisibility = viewerArea.get('visible'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var buttons = []; var addButtons = function(property){ var value = player.get(property); if(value == undefined) return; if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } if(player != itemDispatcher.get('player') || !mediaDispatcherByParam){ item.bind('begin', onBeginFunction, self); } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "getMediaByName": function(name){  var list = this.getByClassName('Media'); for(var i = 0, count = list.length; i<count; ++i){ var media = list[i]; if((media.get('class') == 'Audio' && media.get('data').label == name) || media.get('label') == name){ return media; } } return undefined; },
  "setStartTimeVideoSync": function(video, player){  this.setStartTimeVideo(video, player.get('currentTime')); },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); } },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "unregisterKey": function(key){  delete window[key]; },
  "historyGoForward": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.forward(); } },
  "setStartTimeVideo": function(video, time){  var items = this.getPlayListItems(video); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; var player = item.get('player'); if(player.get('video') == video && player.get('state') == 'playing') { player.seek(time); } else { startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } } },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; if(this.getPlayListItemByMedia(playList, media) != undefined) return playList; } return undefined; },
  "historyGoBack": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.back(); } },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "showPopupPanoramaOverlay": function(popupPanoramaOverlay, closeButtonProperties, imageHD, toggleImage, toggleImageHD, autoCloseMilliSeconds, audio, stopBackgroundAudio){  var self = this; this.MainViewer.set('toolTipEnabled', false); var cardboardEnabled = this.isCardboardViewMode(); if(!cardboardEnabled) { var zoomImage = this.zoomImagePopupPanorama; var showDuration = popupPanoramaOverlay.get('showDuration'); var hideDuration = popupPanoramaOverlay.get('hideDuration'); var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); var popupMaxWidthBackup = popupPanoramaOverlay.get('popupMaxWidth'); var popupMaxHeightBackup = popupPanoramaOverlay.get('popupMaxHeight'); var showEndFunction = function() { var loadedFunction = function(){ if(!self.isCardboardViewMode()) popupPanoramaOverlay.set('visible', false); }; popupPanoramaOverlay.unbind('showEnd', showEndFunction, self); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', 1); self.showPopupImage(imageHD, toggleImageHD, popupPanoramaOverlay.get('popupMaxWidth'), popupPanoramaOverlay.get('popupMaxHeight'), null, null, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedFunction, hideFunction); }; var hideFunction = function() { var restoreShowDurationFunction = function(){ popupPanoramaOverlay.unbind('showEnd', restoreShowDurationFunction, self); popupPanoramaOverlay.set('visible', false); popupPanoramaOverlay.set('showDuration', showDuration); popupPanoramaOverlay.set('popupMaxWidth', popupMaxWidthBackup); popupPanoramaOverlay.set('popupMaxHeight', popupMaxHeightBackup); }; self.resumePlayers(playersPaused, audio == null || !stopBackgroundAudio); var currentWidth = zoomImage.get('imageWidth'); var currentHeight = zoomImage.get('imageHeight'); popupPanoramaOverlay.bind('showEnd', restoreShowDurationFunction, self, true); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', hideDuration); popupPanoramaOverlay.set('popupMaxWidth', currentWidth); popupPanoramaOverlay.set('popupMaxHeight', currentHeight); if(popupPanoramaOverlay.get('visible')) restoreShowDurationFunction(); else popupPanoramaOverlay.set('visible', true); self.MainViewer.set('toolTipEnabled', true); }; if(!imageHD){ imageHD = popupPanoramaOverlay.get('image'); } if(!toggleImageHD && toggleImage){ toggleImageHD = toggleImage; } popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); } else { var hideEndFunction = function() { self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } popupPanoramaOverlay.unbind('hideEnd', hideEndFunction, self); self.MainViewer.set('toolTipEnabled', true); }; var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } popupPanoramaOverlay.bind('hideEnd', hideEndFunction, this, true); } popupPanoramaOverlay.set('visible', true); },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties, stopAudios){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); if(stopAudios) { self.resumeGlobalAudios(); } }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); if(stopAudios) { this.pauseGlobalAudios(); } popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "setPanoramaCameraWithCurrentSpot": function(playListItem){  var currentPlayer = this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer == undefined){ return; } var playerClass = currentPlayer.get('class'); if(playerClass != 'PanoramaPlayer' && playerClass != 'Video360Player'){ return; } var fromMedia = currentPlayer.get('panorama'); if(fromMedia == undefined) { fromMedia = currentPlayer.get('video'); } var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, fromMedia); this.startPanoramaWithCamera(panorama, newCamera); },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var resizeFunction = function(){ setTimeout(setCloseButtonPosition, 0); }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); zoomImage.bind('resize', resizeFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if (timeoutUserInteractionID) clearTimeout(timeoutUserInteractionID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); zoomImage.unbind('resize', resizeFunction, this); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "triggerOverlay": function(overlay, eventName){  if(overlay.get('areas') != undefined) { var areas = overlay.get('areas'); for(var i = 0; i<areas.length; ++i) { areas[i].trigger(eventName); } } else { overlay.trigger(eventName); } },
  "autotriggerAtStart": function(playList, callback, once){  var onChange = function(event){ callback(); if(once == true) playList.unbind('change', onChange, this); }; playList.bind('change', onChange, this); },
  "setOverlayBehaviour": function(overlay, media, action){  var executeFunc = function() { switch(action){ case 'triggerClick': this.triggerOverlay(overlay, 'click'); break; case 'stop': case 'play': case 'pause': overlay[action](); break; case 'togglePlayPause': case 'togglePlayStop': if(overlay.get('state') == 'playing') overlay[action == 'togglePlayPause' ? 'pause' : 'stop'](); else overlay.play(); break; } if(window.overlaysDispatched == undefined) window.overlaysDispatched = {}; var id = overlay.get('id'); window.overlaysDispatched[id] = true; setTimeout(function(){ delete window.overlaysDispatched[id]; }, 2000); }; if(window.overlaysDispatched != undefined && overlay.get('id') in window.overlaysDispatched) return; var playList = this.getPlayListWithMedia(media, true); if(playList != undefined){ var item = this.getPlayListItemByMedia(playList, media); if(playList.get('items').indexOf(item) != playList.get('selectedIndex')){ var beginFunc = function(e){ item.unbind('begin', beginFunc, this); executeFunc.call(this); }; item.bind('begin', beginFunc, this); return; } } executeFunc.call(this); },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "existsKey": function(key){  return key in window; },
  "initGA": function(){  var sendFunc = function(category, event, label) { ga('send', 'event', category, event, label); }; var media = this.getByClassName('Panorama'); media = media.concat(this.getByClassName('Video360')); media = media.concat(this.getByClassName('Map')); for(var i = 0, countI = media.length; i<countI; ++i){ var m = media[i]; var mediaLabel = m.get('label'); var overlays = this.getOverlays(m); for(var j = 0, countJ = overlays.length; j<countJ; ++j){ var overlay = overlays[j]; var overlayLabel = overlay.get('data') != undefined ? mediaLabel + ' - ' + overlay.get('data')['label'] : mediaLabel; switch(overlay.get('class')) { case 'HotspotPanoramaOverlay': case 'HotspotMapOverlay': var areas = overlay.get('areas'); for (var z = 0; z<areas.length; ++z) { areas[z].bind('click', sendFunc.bind(this, 'Hotspot', 'click', overlayLabel), this); } break; case 'CeilingCapPanoramaOverlay': case 'TripodCapPanoramaOverlay': overlay.bind('click', sendFunc.bind(this, 'Cap', 'click', overlayLabel), this); break; } } } var components = this.getByClassName('Button'); components = components.concat(this.getByClassName('IconButton')); for(var i = 0, countI = components.length; i<countI; ++i){ var c = components[i]; var componentLabel = c.get('data')['name']; c.bind('click', sendFunc.bind(this, 'Skin', 'click', componentLabel), this); } var items = this.getByClassName('PlayListItem'); var media2Item = {}; for(var i = 0, countI = items.length; i<countI; ++i) { var item = items[i]; var media = item.get('media'); if(!(media.get('id') in media2Item)) { item.bind('begin', sendFunc.bind(this, 'Media', 'play', media.get('label')), this); media2Item[media.get('id')] = item; } } },
  "changeBackgroundWhilePlay": function(playList, index, color){  var stopFunction = function(event){ playListItem.unbind('stop', stopFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playListItem.bind('stop', stopFunction, this); } },
  "getOverlays": function(media){  switch(media.get('class')){ case 'Panorama': var overlays = media.get('overlays').concat() || []; var frames = media.get('frames'); for(var j = 0; j<frames.length; ++j){ overlays = overlays.concat(frames[j].get('overlays') || []); } return overlays; case 'Video360': case 'Map': return media.get('overlays') || []; default: return []; } },
  "openLink": function(url, name){  if(url == location.href) { return; } var isElectron = (window && window.process && window.process.versions && window.process.versions['electron']) || (navigator && navigator.userAgent && navigator.userAgent.indexOf('Electron') >= 0); if (name == '_blank' && isElectron) { if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf' || url.startsWith('file://')) { var shell = window.require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else if(isElectron && (name == '_top' || name == '_self')) { window.location = url; } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "getKey": function(key){  return window[key]; }
 },
 "defaultVRPointer": "laser",
 "paddingRight": 0,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "minWidth": 20,
 "verticalAlign": "top",
 "class": "Player",
 "height": "100%",
 "paddingLeft": 0,
 "paddingBottom": 0,
 "gap": 10,
 "shadow": false,
 "paddingTop": 0,
 "borderRadius": 0,
 "downloadEnabled": false,
 "overflow": "visible",
 "definitions": [{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "hfov": 150,
  "class": "PanoramaCameraPosition",
  "yaw": -37.43,
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "id": "camera_AC10E8D6_A002_C0AF_41E3_0F2C9DF8CAA3"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "hfov": 150,
  "class": "PanoramaCameraPosition",
  "yaw": 77.11,
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "id": "camera_ADC2EAE0_A002_C064_41E2_A6F43F08B47C"
},
{
 "adjacentPanoramas": [
  {
   "backwardYaw": -157.3,
   "yaw": 98.39,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_95CABCDA_9FDB_0CE3_41CA_DA649A270AE4"
  },
  {
   "panorama": "this.panorama_95CE504E_9FDB_13E0_41D9_DFE773F2A116",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_95CE504E_9FDB_13E0_41D9_DFE773F2A116",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_95CE504E_9FDB_13E0_41D9_DFE773F2A116",
   "class": "AdjacentPanorama"
  },
  {
   "backwardYaw": -81.2,
   "yaw": -79.98,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_95CEAAFB_9FDB_14A1_41BB_DE23CE45C8B7"
  },
  {
   "backwardYaw": -128.25,
   "yaw": -32.11,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_95C8483B_9FDB_13A0_41D9_A9354A49ED83"
  }
 ],
 "hfovMin": "150%",
 "hfov": 360,
 "label": "4",
 "id": "panorama_95CAC973_9FDB_F5A0_41C2_2562D828735D",
 "thumbnailUrl": "media/panorama_95CAC973_9FDB_F5A0_41C2_2562D828735D_t.jpg",
 "class": "Panorama",
 "pitch": 0,
 "partial": false,
 "hfovMax": 150,
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "top": {
    "levels": [
     {
      "url": "media/panorama_95CAC973_9FDB_F5A0_41C2_2562D828735D_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_95CAC973_9FDB_F5A0_41C2_2562D828735D_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_95CAC973_9FDB_F5A0_41C2_2562D828735D_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_95CAC973_9FDB_F5A0_41C2_2562D828735D_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_95CAC973_9FDB_F5A0_41C2_2562D828735D_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_95CAC973_9FDB_F5A0_41C2_2562D828735D_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_95CAC973_9FDB_F5A0_41C2_2562D828735D_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_95CAC973_9FDB_F5A0_41C2_2562D828735D_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_95CAC973_9FDB_F5A0_41C2_2562D828735D_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_95CAC973_9FDB_F5A0_41C2_2562D828735D_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_95CAC973_9FDB_F5A0_41C2_2562D828735D_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_95CAC973_9FDB_F5A0_41C2_2562D828735D_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_95CAC973_9FDB_F5A0_41C2_2562D828735D_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_95CAC973_9FDB_F5A0_41C2_2562D828735D_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_95CAC973_9FDB_F5A0_41C2_2562D828735D_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_95CAC973_9FDB_F5A0_41C2_2562D828735D_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_95CAC973_9FDB_F5A0_41C2_2562D828735D_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_95CAC973_9FDB_F5A0_41C2_2562D828735D_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_95CAC973_9FDB_F5A0_41C2_2562D828735D_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_8E42CF51_9FB5_0DE0_41C0_D94C91D72CA7",
  "this.overlay_8E281531_9FB6_FDA0_41C2_FCA392DA07C0",
  "this.overlay_8DFA6D44_9FB7_0DE7_41C8_D58D31E53CAF"
 ]
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "hfov": 150,
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "id": "panorama_95CAC973_9FDB_F5A0_41C2_2562D828735D_camera"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "hfov": 102,
  "class": "PanoramaCameraPosition",
  "yaw": 155.66,
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "id": "camera_AD383A4C_A002_C3A3_41E2_EA7367B8FDE9"
},
{
 "items": [
  {
   "media": "this.panorama_94D2B3E3_9FDB_34A0_41DB_B63416D1D5CD",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_94D2B3E3_9FDB_34A0_41DB_B63416D1D5CD_camera"
  },
  {
   "media": "this.panorama_95CE504E_9FDB_13E0_41D9_DFE773F2A116",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_95CE504E_9FDB_13E0_41D9_DFE773F2A116_camera"
  },
  {
   "media": "this.panorama_95CEAAFB_9FDB_14A1_41BB_DE23CE45C8B7",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_95CEAAFB_9FDB_14A1_41BB_DE23CE45C8B7_camera"
  },
  {
   "media": "this.panorama_95CAC973_9FDB_F5A0_41C2_2562D828735D",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 4)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_95CAC973_9FDB_F5A0_41C2_2562D828735D_camera"
  },
  {
   "media": "this.panorama_95C8483B_9FDB_13A0_41D9_A9354A49ED83",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 4, 5)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_95C8483B_9FDB_13A0_41D9_A9354A49ED83_camera"
  },
  {
   "media": "this.panorama_95CE85AF_9FDB_3CA0_41D3_1C2ACDD27F9A",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 5, 6)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_95CE85AF_9FDB_3CA0_41D3_1C2ACDD27F9A_camera"
  },
  {
   "media": "this.panorama_95CCB0E6_9FDB_14A0_4180_ADB9B7ACD63F",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 6, 7)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_95CCB0E6_9FDB_14A0_4180_ADB9B7ACD63F_camera"
  },
  {
   "media": "this.panorama_95CABCDA_9FDB_0CE3_41CA_DA649A270AE4",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 7, 8)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_95CABCDA_9FDB_0CE3_41CA_DA649A270AE4_camera"
  },
  {
   "media": "this.panorama_95C97891_9FDB_7361_41D1_B7C6EA5B15A2",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 8, 9)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_95C97891_9FDB_7361_41D1_B7C6EA5B15A2_camera"
  },
  {
   "media": "this.panorama_95CB7498_9FDB_136F_41E0_0D45B7441953",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 9, 10)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_95CB7498_9FDB_136F_41E0_0D45B7441953_camera"
  },
  {
   "media": "this.panorama_95CE3FFF_9FDB_0CA0_41E1_9D3191535A8B",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 10, 11)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_95CE3FFF_9FDB_0CA0_41E1_9D3191535A8B_camera"
  },
  {
   "media": "this.panorama_95CE5B5B_9FDB_35E0_41AD_756AF7314A45",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 11, 12)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_95CE5B5B_9FDB_35E0_41AD_756AF7314A45_camera"
  },
  {
   "media": "this.panorama_95C54704_9FDB_1D60_41C0_05C63FA5C8FD",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 12, 13)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_95C54704_9FDB_1D60_41C0_05C63FA5C8FD_camera"
  },
  {
   "media": "this.panorama_95C1C33D_9FDA_F5A1_41CE_300BFF342ACD",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 13, 14)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_95C1C33D_9FDA_F5A1_41CE_300BFF342ACD_camera"
  },
  {
   "media": "this.panorama_95CAEEFE_9FD5_0CA3_41D7_698F49443639",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 14, 15)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_95CAEEFE_9FD5_0CA3_41D7_698F49443639_camera"
  },
  {
   "media": "this.panorama_95C3EA86_9FD5_1760_41E2_95D4D803E32C",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 15, 16)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_95C3EA86_9FD5_1760_41E2_95D4D803E32C_camera"
  },
  {
   "media": "this.panorama_95CFA5B7_9FD5_3CA0_41D7_984D6157F458",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 16, 17)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_95CFA5B7_9FD5_3CA0_41D7_984D6157F458_camera"
  },
  {
   "media": "this.panorama_95CF114F_9FD5_15E1_41E2_621FCC83952E",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 17, 18)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_95CF114F_9FD5_15E1_41E2_621FCC83952E_camera"
  },
  {
   "media": "this.panorama_95C81D0C_9FD5_0D60_41CD_3FBDFBA76D8F",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 18, 19)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_95C81D0C_9FD5_0D60_41CD_3FBDFBA76D8F_camera"
  },
  {
   "media": "this.panorama_95CCD7D5_9FD5_7CE0_41E2_994AB6AB0398",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 19, 20)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_95CCD7D5_9FD5_7CE0_41E2_994AB6AB0398_camera"
  },
  {
   "media": "this.panorama_95C82417_9FD5_1361_41DC_3FAAC71EAC58",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 20, 21)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_95C82417_9FD5_1361_41DC_3FAAC71EAC58_camera"
  },
  {
   "media": "this.panorama_84C1984D_9F6F_13E0_41E3_4A0E00713FF2",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_84C1984D_9F6F_13E0_41E3_4A0E00713FF2_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 21, 0)",
   "player": "this.MainViewerPanoramaPlayer",
   "end": "this.trigger('tourEnded')"
  }
 ],
 "id": "mainPlayList",
 "class": "PlayList"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "hfov": 150,
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "id": "panorama_95CAEEFE_9FD5_0CA3_41D7_698F49443639_camera"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "hfov": 150,
  "class": "PanoramaCameraPosition",
  "yaw": 100.02,
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "id": "camera_ABFA8B53_A002_C1A4_41B5_992C6107DDC2"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "hfov": 146,
  "class": "PanoramaCameraPosition",
  "yaw": 139.3,
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "id": "camera_ABD0487D_A002_C05C_41D5_1A61C6BB7A50"
},
{
 "adjacentPanoramas": [
  {
   "backwardYaw": -21.39,
   "yaw": -81.53,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_95C81D0C_9FD5_0D60_41CD_3FBDFBA76D8F"
  },
  {
   "panorama": "this.panorama_95CABCDA_9FDB_0CE3_41CA_DA649A270AE4",
   "class": "AdjacentPanorama"
  }
 ],
 "hfovMin": "150%",
 "hfov": 360,
 "label": "20",
 "id": "panorama_95CCD7D5_9FD5_7CE0_41E2_994AB6AB0398",
 "thumbnailUrl": "media/panorama_95CCD7D5_9FD5_7CE0_41E2_994AB6AB0398_t.jpg",
 "class": "Panorama",
 "pitch": 0,
 "partial": false,
 "hfovMax": 150,
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "top": {
    "levels": [
     {
      "url": "media/panorama_95CCD7D5_9FD5_7CE0_41E2_994AB6AB0398_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_95CCD7D5_9FD5_7CE0_41E2_994AB6AB0398_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_95CCD7D5_9FD5_7CE0_41E2_994AB6AB0398_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_95CCD7D5_9FD5_7CE0_41E2_994AB6AB0398_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_95CCD7D5_9FD5_7CE0_41E2_994AB6AB0398_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_95CCD7D5_9FD5_7CE0_41E2_994AB6AB0398_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_95CCD7D5_9FD5_7CE0_41E2_994AB6AB0398_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_95CCD7D5_9FD5_7CE0_41E2_994AB6AB0398_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_95CCD7D5_9FD5_7CE0_41E2_994AB6AB0398_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_95CCD7D5_9FD5_7CE0_41E2_994AB6AB0398_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_95CCD7D5_9FD5_7CE0_41E2_994AB6AB0398_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_95CCD7D5_9FD5_7CE0_41E2_994AB6AB0398_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_95CCD7D5_9FD5_7CE0_41E2_994AB6AB0398_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_95CCD7D5_9FD5_7CE0_41E2_994AB6AB0398_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_95CCD7D5_9FD5_7CE0_41E2_994AB6AB0398_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_95CCD7D5_9FD5_7CE0_41E2_994AB6AB0398_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_95CCD7D5_9FD5_7CE0_41E2_994AB6AB0398_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_95CCD7D5_9FD5_7CE0_41E2_994AB6AB0398_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_95CCD7D5_9FD5_7CE0_41E2_994AB6AB0398_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_8294CF5C_9F55_0DE7_41DB_DDFF9EEF243F"
 ]
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "hfov": 146,
  "class": "PanoramaCameraPosition",
  "yaw": 164.66,
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "id": "camera_AD761A97_A002_C0AC_41DD_805557F67148"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 23.11,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "id": "camera_AD0079E8_A002_C064_41E3_C8A7017923BF"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "hfov": 150,
  "class": "PanoramaCameraPosition",
  "yaw": 173.25,
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "id": "camera_AC794949_A002_C1A4_41E2_FA3D8F993D1B"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -134.8,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "id": "camera_ABF0B8AB_A002_C0E5_41D5_94304F0A3868"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "id": "panorama_84C1984D_9F6F_13E0_41E3_4A0E00713FF2_camera"
},
{
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_95CE504E_9FDB_13E0_41D9_DFE773F2A116",
   "class": "AdjacentPanorama"
  },
  {
   "backwardYaw": -42.75,
   "yaw": -156.89,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_95C97891_9FDB_7361_41D1_B7C6EA5B15A2"
  }
 ],
 "hfovMin": "150%",
 "hfov": 360,
 "label": "11",
 "id": "panorama_95CE3FFF_9FDB_0CA0_41E1_9D3191535A8B",
 "thumbnailUrl": "media/panorama_95CE3FFF_9FDB_0CA0_41E1_9D3191535A8B_t.jpg",
 "class": "Panorama",
 "pitch": 0,
 "partial": false,
 "hfovMax": 150,
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "top": {
    "levels": [
     {
      "url": "media/panorama_95CE3FFF_9FDB_0CA0_41E1_9D3191535A8B_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_95CE3FFF_9FDB_0CA0_41E1_9D3191535A8B_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_95CE3FFF_9FDB_0CA0_41E1_9D3191535A8B_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_95CE3FFF_9FDB_0CA0_41E1_9D3191535A8B_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_95CE3FFF_9FDB_0CA0_41E1_9D3191535A8B_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_95CE3FFF_9FDB_0CA0_41E1_9D3191535A8B_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_95CE3FFF_9FDB_0CA0_41E1_9D3191535A8B_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_95CE3FFF_9FDB_0CA0_41E1_9D3191535A8B_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_95CE3FFF_9FDB_0CA0_41E1_9D3191535A8B_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_95CE3FFF_9FDB_0CA0_41E1_9D3191535A8B_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_95CE3FFF_9FDB_0CA0_41E1_9D3191535A8B_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_95CE3FFF_9FDB_0CA0_41E1_9D3191535A8B_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_95CE3FFF_9FDB_0CA0_41E1_9D3191535A8B_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_95CE3FFF_9FDB_0CA0_41E1_9D3191535A8B_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_95CE3FFF_9FDB_0CA0_41E1_9D3191535A8B_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_95CE3FFF_9FDB_0CA0_41E1_9D3191535A8B_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_95CE3FFF_9FDB_0CA0_41E1_9D3191535A8B_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_95CE3FFF_9FDB_0CA0_41E1_9D3191535A8B_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_95CE3FFF_9FDB_0CA0_41E1_9D3191535A8B_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_899B5331_9F77_35A1_41CF_BB13AF3ACCAA"
 ]
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "hfov": 150,
  "class": "PanoramaCameraPosition",
  "yaw": 31.7,
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "id": "camera_ADB06AD2_A002_C0A4_41DB_7C6FE9A48429"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "hfov": 150,
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "id": "panorama_95CE504E_9FDB_13E0_41D9_DFE773F2A116_camera"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "hfov": 150,
  "class": "PanoramaCameraPosition",
  "yaw": 98.47,
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "id": "camera_ACE139B0_A002_C0E3_41E3_71CFDA4285A1"
},
{
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_95CE504E_9FDB_13E0_41D9_DFE773F2A116",
   "class": "AdjacentPanorama"
  },
  {
   "backwardYaw": -9.61,
   "yaw": -112.3,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_95C3EA86_9FD5_1760_41E2_95D4D803E32C"
  }
 ],
 "hfovMin": "150%",
 "hfov": 360,
 "label": "17",
 "id": "panorama_95CFA5B7_9FD5_3CA0_41D7_984D6157F458",
 "thumbnailUrl": "media/panorama_95CFA5B7_9FD5_3CA0_41D7_984D6157F458_t.jpg",
 "class": "Panorama",
 "pitch": 0,
 "partial": false,
 "hfovMax": 150,
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "top": {
    "levels": [
     {
      "url": "media/panorama_95CFA5B7_9FD5_3CA0_41D7_984D6157F458_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_95CFA5B7_9FD5_3CA0_41D7_984D6157F458_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_95CFA5B7_9FD5_3CA0_41D7_984D6157F458_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_95CFA5B7_9FD5_3CA0_41D7_984D6157F458_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_95CFA5B7_9FD5_3CA0_41D7_984D6157F458_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_95CFA5B7_9FD5_3CA0_41D7_984D6157F458_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_95CFA5B7_9FD5_3CA0_41D7_984D6157F458_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_95CFA5B7_9FD5_3CA0_41D7_984D6157F458_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_95CFA5B7_9FD5_3CA0_41D7_984D6157F458_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_95CFA5B7_9FD5_3CA0_41D7_984D6157F458_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_95CFA5B7_9FD5_3CA0_41D7_984D6157F458_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_95CFA5B7_9FD5_3CA0_41D7_984D6157F458_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_95CFA5B7_9FD5_3CA0_41D7_984D6157F458_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_95CFA5B7_9FD5_3CA0_41D7_984D6157F458_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_95CFA5B7_9FD5_3CA0_41D7_984D6157F458_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_95CFA5B7_9FD5_3CA0_41D7_984D6157F458_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_95CFA5B7_9FD5_3CA0_41D7_984D6157F458_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_95CFA5B7_9FD5_3CA0_41D7_984D6157F458_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_95CFA5B7_9FD5_3CA0_41D7_984D6157F458_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_8539AA71_9F75_37A0_4186_39441A16113A"
 ]
},
{
 "viewerArea": "this.MainViewer",
 "class": "PanoramaPlayer",
 "touchControlMode": "drag_rotation",
 "id": "MainViewerPanoramaPlayer",
 "gyroscopeVerticalDraggingEnabled": true,
 "displayPlaybackBar": true,
 "mouseControlMode": "drag_rotation"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "hfov": 150,
  "class": "PanoramaCameraPosition",
  "yaw": 119.66,
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "id": "camera_ABF0BB45_A002_C1AC_41E0_C4A5B3DC8363"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "hfov": 150,
  "class": "PanoramaCameraPosition",
  "yaw": 67.7,
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "id": "camera_AC884958_A002_C1A4_41C5_211AC6D916EC"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "hfov": 150,
  "class": "PanoramaCameraPosition",
  "yaw": 119.66,
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "id": "camera_ABEB9B28_A002_C1E4_41DC_4A117DCA28B9"
},
{
 "adjacentPanoramas": [
  {
   "backwardYaw": -171.94,
   "yaw": 91.84,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_95C81D0C_9FD5_0D60_41CD_3FBDFBA76D8F"
  },
  {
   "panorama": "this.panorama_95CE504E_9FDB_13E0_41D9_DFE773F2A116",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_95CE504E_9FDB_13E0_41D9_DFE773F2A116",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_95CE504E_9FDB_13E0_41D9_DFE773F2A116",
   "class": "AdjacentPanorama"
  },
  {
   "backwardYaw": 102.56,
   "yaw": -7.57,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_84C1984D_9F6F_13E0_41E3_4A0E00713FF2"
  },
  {
   "backwardYaw": 83.25,
   "yaw": -91.84,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_95C3EA86_9FD5_1760_41E2_95D4D803E32C"
  }
 ],
 "hfovMin": "150%",
 "hfov": 360,
 "label": "18",
 "id": "panorama_95CF114F_9FD5_15E1_41E2_621FCC83952E",
 "thumbnailUrl": "media/panorama_95CF114F_9FD5_15E1_41E2_621FCC83952E_t.jpg",
 "class": "Panorama",
 "pitch": 0,
 "partial": false,
 "hfovMax": 150,
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "top": {
    "levels": [
     {
      "url": "media/panorama_95CF114F_9FD5_15E1_41E2_621FCC83952E_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_95CF114F_9FD5_15E1_41E2_621FCC83952E_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_95CF114F_9FD5_15E1_41E2_621FCC83952E_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_95CF114F_9FD5_15E1_41E2_621FCC83952E_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_95CF114F_9FD5_15E1_41E2_621FCC83952E_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_95CF114F_9FD5_15E1_41E2_621FCC83952E_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_95CF114F_9FD5_15E1_41E2_621FCC83952E_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_95CF114F_9FD5_15E1_41E2_621FCC83952E_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_95CF114F_9FD5_15E1_41E2_621FCC83952E_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_95CF114F_9FD5_15E1_41E2_621FCC83952E_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_95CF114F_9FD5_15E1_41E2_621FCC83952E_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_95CF114F_9FD5_15E1_41E2_621FCC83952E_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_95CF114F_9FD5_15E1_41E2_621FCC83952E_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_95CF114F_9FD5_15E1_41E2_621FCC83952E_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_95CF114F_9FD5_15E1_41E2_621FCC83952E_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_95CF114F_9FD5_15E1_41E2_621FCC83952E_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_95CF114F_9FD5_15E1_41E2_621FCC83952E_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_95CF114F_9FD5_15E1_41E2_621FCC83952E_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_95CF114F_9FD5_15E1_41E2_621FCC83952E_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_853F07F0_9F75_FCBF_41D8_CC1B01680B52",
  "this.overlay_84F8271A_9F75_3D60_41E2_A3E6DDFBA216",
  "this.overlay_84A3BD92_9F75_0D63_41C2_ED7DE9813663"
 ]
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "hfov": 150,
  "class": "PanoramaCameraPosition",
  "yaw": -11.66,
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "id": "camera_ABEB689C_A002_C0DC_41E2_507C1DE0D96F"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "hfov": 150,
  "class": "PanoramaCameraPosition",
  "yaw": 172.43,
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "id": "camera_AC9B2966_A002_C06C_41A9_B1FDC97C73BD"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "hfov": 150,
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "id": "panorama_95CABCDA_9FDB_0CE3_41CA_DA649A270AE4_camera"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "hfov": 150,
  "class": "PanoramaCameraPosition",
  "yaw": 6.34,
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "id": "camera_ABD9088C_A002_C0BC_41CE_1DCF22C26472"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "hfov": 150,
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "id": "panorama_95CCD7D5_9FD5_7CE0_41E2_994AB6AB0398_camera"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "hfov": 150,
  "class": "PanoramaCameraPosition",
  "yaw": -88.16,
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "id": "camera_ACD119A1_A002_C0E5_41A1_6C1A0D3DD3B7"
},
{
 "adjacentPanoramas": [
  {
   "backwardYaw": -91.84,
   "yaw": 83.25,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_95CF114F_9FD5_15E1_41E2_621FCC83952E"
  },
  {
   "panorama": "this.panorama_95CE504E_9FDB_13E0_41D9_DFE773F2A116",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_95CE504E_9FDB_13E0_41D9_DFE773F2A116",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_95CE504E_9FDB_13E0_41D9_DFE773F2A116",
   "class": "AdjacentPanorama"
  },
  {
   "backwardYaw": -6.75,
   "yaw": 168.34,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_95CAEEFE_9FD5_0CA3_41D7_698F49443639"
  },
  {
   "backwardYaw": -112.3,
   "yaw": -9.61,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_95CFA5B7_9FD5_3CA0_41D7_984D6157F458"
  }
 ],
 "hfovMin": "150%",
 "hfov": 360,
 "label": "16",
 "id": "panorama_95C3EA86_9FD5_1760_41E2_95D4D803E32C",
 "thumbnailUrl": "media/panorama_95C3EA86_9FD5_1760_41E2_95D4D803E32C_t.jpg",
 "class": "Panorama",
 "pitch": 0,
 "partial": false,
 "hfovMax": 150,
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "top": {
    "levels": [
     {
      "url": "media/panorama_95C3EA86_9FD5_1760_41E2_95D4D803E32C_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_95C3EA86_9FD5_1760_41E2_95D4D803E32C_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_95C3EA86_9FD5_1760_41E2_95D4D803E32C_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_95C3EA86_9FD5_1760_41E2_95D4D803E32C_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_95C3EA86_9FD5_1760_41E2_95D4D803E32C_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_95C3EA86_9FD5_1760_41E2_95D4D803E32C_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_95C3EA86_9FD5_1760_41E2_95D4D803E32C_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_95C3EA86_9FD5_1760_41E2_95D4D803E32C_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_95C3EA86_9FD5_1760_41E2_95D4D803E32C_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_95C3EA86_9FD5_1760_41E2_95D4D803E32C_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_95C3EA86_9FD5_1760_41E2_95D4D803E32C_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_95C3EA86_9FD5_1760_41E2_95D4D803E32C_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_95C3EA86_9FD5_1760_41E2_95D4D803E32C_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_95C3EA86_9FD5_1760_41E2_95D4D803E32C_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_95C3EA86_9FD5_1760_41E2_95D4D803E32C_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_95C3EA86_9FD5_1760_41E2_95D4D803E32C_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_95C3EA86_9FD5_1760_41E2_95D4D803E32C_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_95C3EA86_9FD5_1760_41E2_95D4D803E32C_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_95C3EA86_9FD5_1760_41E2_95D4D803E32C_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_86A14438_9F75_33A0_41D4_7DE523F7D188",
  "this.overlay_864371A3_9F75_F4A0_41CC_82361FCD2C05",
  "this.overlay_860CEFAB_9F75_0CA0_41DC_F0A59C829EA7"
 ]
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "hfov": 150,
  "class": "PanoramaCameraPosition",
  "yaw": -81.61,
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "id": "camera_AC5C692C_A002_C1FC_41DA_538FDF45841E"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "hfov": 146,
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "id": "panorama_95CEAAFB_9FDB_14A1_41BB_DE23CE45C8B7_camera"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "hfov": 150,
  "class": "PanoramaCameraPosition",
  "yaw": -10.02,
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "id": "camera_ABFD3B62_A002_C064_41D4_671FA182F73F"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "hfov": 150,
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "id": "panorama_95C8483B_9FDB_13A0_41D9_A9354A49ED83_camera"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "hfov": 99,
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "id": "panorama_95C82417_9FD5_1361_41DC_3FAAC71EAC58_camera"
},
{
 "adjacentPanoramas": [
  {
   "backwardYaw": 119.66,
   "yaw": -60.34,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_95CEAAFB_9FDB_14A1_41BB_DE23CE45C8B7"
  },
  {
   "backwardYaw": -24.34,
   "yaw": 142.57,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_94D2B3E3_9FDB_34A0_41DB_B63416D1D5CD"
  }
 ],
 "hfovMin": "150%",
 "hfov": 360,
 "label": "02",
 "id": "panorama_95CE504E_9FDB_13E0_41D9_DFE773F2A116",
 "thumbnailUrl": "media/panorama_95CE504E_9FDB_13E0_41D9_DFE773F2A116_t.jpg",
 "class": "Panorama",
 "pitch": 0,
 "partial": false,
 "hfovMax": 150,
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "top": {
    "levels": [
     {
      "url": "media/panorama_95CE504E_9FDB_13E0_41D9_DFE773F2A116_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_95CE504E_9FDB_13E0_41D9_DFE773F2A116_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_95CE504E_9FDB_13E0_41D9_DFE773F2A116_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_95CE504E_9FDB_13E0_41D9_DFE773F2A116_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_95CE504E_9FDB_13E0_41D9_DFE773F2A116_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_95CE504E_9FDB_13E0_41D9_DFE773F2A116_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_95CE504E_9FDB_13E0_41D9_DFE773F2A116_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_95CE504E_9FDB_13E0_41D9_DFE773F2A116_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_95CE504E_9FDB_13E0_41D9_DFE773F2A116_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_95CE504E_9FDB_13E0_41D9_DFE773F2A116_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_95CE504E_9FDB_13E0_41D9_DFE773F2A116_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_95CE504E_9FDB_13E0_41D9_DFE773F2A116_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_95CE504E_9FDB_13E0_41D9_DFE773F2A116_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_95CE504E_9FDB_13E0_41D9_DFE773F2A116_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_95CE504E_9FDB_13E0_41D9_DFE773F2A116_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_95CE504E_9FDB_13E0_41D9_DFE773F2A116_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_95CE504E_9FDB_13E0_41D9_DFE773F2A116_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_95CE504E_9FDB_13E0_41D9_DFE773F2A116_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_95CE504E_9FDB_13E0_41D9_DFE773F2A116_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_8DEBC4DB_9FBF_FCE0_41D6_A413455BC4ED",
  "this.overlay_8F97FAA8_9FBF_74A0_41DE_CFA2714DECB1"
 ]
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "hfov": 150,
  "class": "PanoramaCameraPosition",
  "yaw": 161.39,
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "id": "camera_ABFFA8B9_A002_C0E5_41DA_A3C196363D49"
},
{
 "autoplay": true,
 "class": "MediaAudio",
 "audio": {
  "class": "AudioResource",
  "mp3Url": "media/audio_BF36B4B6_9F5B_1CA0_41DE_D1CFA6A477A0.mp3",
  "oggUrl": "media/audio_BF36B4B6_9F5B_1CA0_41DE_D1CFA6A477A0.ogg"
 },
 "id": "audio_BF36B4B6_9F5B_1CA0_41DE_D1CFA6A477A0",
 "data": {
  "label": "Bruno marz - Lazy SonG"
 }
},
{
 "adjacentPanoramas": [
  {
   "backwardYaw": -173.66,
   "yaw": 169.98,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_95C54704_9FDB_1D60_41C0_05C63FA5C8FD"
  },
  {
   "panorama": "this.panorama_95CE504E_9FDB_13E0_41D9_DFE773F2A116",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_95CE504E_9FDB_13E0_41D9_DFE773F2A116",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_95CE504E_9FDB_13E0_41D9_DFE773F2A116",
   "class": "AdjacentPanorama"
  },
  {
   "backwardYaw": 168.34,
   "yaw": -6.75,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_95C3EA86_9FD5_1760_41E2_95D4D803E32C"
  },
  {
   "backwardYaw": 45.2,
   "yaw": 70.57,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_95CE5B5B_9FDB_35E0_41AD_756AF7314A45"
  }
 ],
 "hfovMin": "150%",
 "hfov": 360,
 "label": "15",
 "id": "panorama_95CAEEFE_9FD5_0CA3_41D7_698F49443639",
 "thumbnailUrl": "media/panorama_95CAEEFE_9FD5_0CA3_41D7_698F49443639_t.jpg",
 "class": "Panorama",
 "pitch": 0,
 "partial": false,
 "hfovMax": 150,
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "top": {
    "levels": [
     {
      "url": "media/panorama_95CAEEFE_9FD5_0CA3_41D7_698F49443639_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_95CAEEFE_9FD5_0CA3_41D7_698F49443639_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_95CAEEFE_9FD5_0CA3_41D7_698F49443639_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_95CAEEFE_9FD5_0CA3_41D7_698F49443639_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_95CAEEFE_9FD5_0CA3_41D7_698F49443639_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_95CAEEFE_9FD5_0CA3_41D7_698F49443639_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_95CAEEFE_9FD5_0CA3_41D7_698F49443639_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_95CAEEFE_9FD5_0CA3_41D7_698F49443639_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_95CAEEFE_9FD5_0CA3_41D7_698F49443639_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_95CAEEFE_9FD5_0CA3_41D7_698F49443639_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_95CAEEFE_9FD5_0CA3_41D7_698F49443639_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_95CAEEFE_9FD5_0CA3_41D7_698F49443639_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_95CAEEFE_9FD5_0CA3_41D7_698F49443639_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_95CAEEFE_9FD5_0CA3_41D7_698F49443639_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_95CAEEFE_9FD5_0CA3_41D7_698F49443639_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_95CAEEFE_9FD5_0CA3_41D7_698F49443639_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_95CAEEFE_9FD5_0CA3_41D7_698F49443639_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_95CAEEFE_9FD5_0CA3_41D7_698F49443639_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_95CAEEFE_9FD5_0CA3_41D7_698F49443639_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_88A7C8EB_9F7D_14A0_41E3_B094726BA2D8",
  "this.overlay_8847EBAD_9F7F_14A1_41D5_699D7DE4E771",
  "this.overlay_85E2AD45_9F7D_0DE0_41E0_918693EECD55"
 ]
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "hfov": 150,
  "class": "PanoramaCameraPosition",
  "yaw": 5.93,
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "id": "camera_AC066B70_A002_C065_41DF_2B20803ECBDF"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "id": "panorama_95CB7498_9FDB_136F_41E0_0D45B7441953_camera"
},
{
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_95CE504E_9FDB_13E0_41D9_DFE773F2A116",
   "class": "AdjacentPanorama"
  },
  {
   "backwardYaw": -40.7,
   "yaw": -102.89,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_95CEAAFB_9FDB_14A1_41BB_DE23CE45C8B7"
  }
 ],
 "hfovMin": "150%",
 "hfov": 360,
 "label": "7",
 "id": "panorama_95CCB0E6_9FDB_14A0_4180_ADB9B7ACD63F",
 "thumbnailUrl": "media/panorama_95CCB0E6_9FDB_14A0_4180_ADB9B7ACD63F_t.jpg",
 "class": "Panorama",
 "pitch": 0,
 "partial": false,
 "hfovMax": 150,
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "top": {
    "levels": [
     {
      "url": "media/panorama_95CCB0E6_9FDB_14A0_4180_ADB9B7ACD63F_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_95CCB0E6_9FDB_14A0_4180_ADB9B7ACD63F_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_95CCB0E6_9FDB_14A0_4180_ADB9B7ACD63F_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_95CCB0E6_9FDB_14A0_4180_ADB9B7ACD63F_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_95CCB0E6_9FDB_14A0_4180_ADB9B7ACD63F_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_95CCB0E6_9FDB_14A0_4180_ADB9B7ACD63F_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_95CCB0E6_9FDB_14A0_4180_ADB9B7ACD63F_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_95CCB0E6_9FDB_14A0_4180_ADB9B7ACD63F_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_95CCB0E6_9FDB_14A0_4180_ADB9B7ACD63F_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_95CCB0E6_9FDB_14A0_4180_ADB9B7ACD63F_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_95CCB0E6_9FDB_14A0_4180_ADB9B7ACD63F_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_95CCB0E6_9FDB_14A0_4180_ADB9B7ACD63F_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_95CCB0E6_9FDB_14A0_4180_ADB9B7ACD63F_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_95CCB0E6_9FDB_14A0_4180_ADB9B7ACD63F_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_95CCB0E6_9FDB_14A0_4180_ADB9B7ACD63F_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_95CCB0E6_9FDB_14A0_4180_ADB9B7ACD63F_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_95CCB0E6_9FDB_14A0_4180_ADB9B7ACD63F_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_95CCB0E6_9FDB_14A0_4180_ADB9B7ACD63F_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_95CCB0E6_9FDB_14A0_4180_ADB9B7ACD63F_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_8D37D861_9FAB_73A0_41DF_FFE71DE8E2DB"
 ]
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "hfov": 150,
  "class": "PanoramaCameraPosition",
  "yaw": 22.7,
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "id": "camera_AD4BDA65_A002_C06D_41C0_ABE9A57AAACD"
},
{
 "items": [
  {
   "media": "this.panorama_94D2B3E3_9FDB_34A0_41DB_B63416D1D5CD",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.playList_8A110B50_9FAD_15E0_41C4_59428D39A8DF, 0, 1)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_94D2B3E3_9FDB_34A0_41DB_B63416D1D5CD_camera"
  },
  {
   "media": "this.panorama_95CE504E_9FDB_13E0_41D9_DFE773F2A116",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.playList_8A110B50_9FAD_15E0_41C4_59428D39A8DF, 1, 2)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_95CE504E_9FDB_13E0_41D9_DFE773F2A116_camera"
  },
  {
   "media": "this.panorama_95CEAAFB_9FDB_14A1_41BB_DE23CE45C8B7",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.playList_8A110B50_9FAD_15E0_41C4_59428D39A8DF, 2, 3)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_95CEAAFB_9FDB_14A1_41BB_DE23CE45C8B7_camera"
  },
  {
   "media": "this.panorama_95CAC973_9FDB_F5A0_41C2_2562D828735D",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.playList_8A110B50_9FAD_15E0_41C4_59428D39A8DF, 3, 4)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_95CAC973_9FDB_F5A0_41C2_2562D828735D_camera"
  },
  {
   "media": "this.panorama_95C8483B_9FDB_13A0_41D9_A9354A49ED83",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.playList_8A110B50_9FAD_15E0_41C4_59428D39A8DF, 4, 5)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_95C8483B_9FDB_13A0_41D9_A9354A49ED83_camera"
  },
  {
   "media": "this.panorama_95CE85AF_9FDB_3CA0_41D3_1C2ACDD27F9A",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.playList_8A110B50_9FAD_15E0_41C4_59428D39A8DF, 5, 6)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_95CE85AF_9FDB_3CA0_41D3_1C2ACDD27F9A_camera"
  },
  {
   "media": "this.panorama_95CCB0E6_9FDB_14A0_4180_ADB9B7ACD63F",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.playList_8A110B50_9FAD_15E0_41C4_59428D39A8DF, 6, 7)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_95CCB0E6_9FDB_14A0_4180_ADB9B7ACD63F_camera"
  },
  {
   "media": "this.panorama_95CABCDA_9FDB_0CE3_41CA_DA649A270AE4",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.playList_8A110B50_9FAD_15E0_41C4_59428D39A8DF, 7, 8)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_95CABCDA_9FDB_0CE3_41CA_DA649A270AE4_camera"
  },
  {
   "media": "this.panorama_95C97891_9FDB_7361_41D1_B7C6EA5B15A2",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.playList_8A110B50_9FAD_15E0_41C4_59428D39A8DF, 8, 9)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_95C97891_9FDB_7361_41D1_B7C6EA5B15A2_camera"
  },
  {
   "media": "this.panorama_95CB7498_9FDB_136F_41E0_0D45B7441953",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.playList_8A110B50_9FAD_15E0_41C4_59428D39A8DF, 9, 10)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_95CB7498_9FDB_136F_41E0_0D45B7441953_camera"
  },
  {
   "media": "this.panorama_95CE3FFF_9FDB_0CA0_41E1_9D3191535A8B",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.playList_8A110B50_9FAD_15E0_41C4_59428D39A8DF, 10, 11)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_95CE3FFF_9FDB_0CA0_41E1_9D3191535A8B_camera"
  },
  {
   "media": "this.panorama_95CE5B5B_9FDB_35E0_41AD_756AF7314A45",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.playList_8A110B50_9FAD_15E0_41C4_59428D39A8DF, 11, 12)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_95CE5B5B_9FDB_35E0_41AD_756AF7314A45_camera"
  },
  {
   "media": "this.panorama_95C54704_9FDB_1D60_41C0_05C63FA5C8FD",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.playList_8A110B50_9FAD_15E0_41C4_59428D39A8DF, 12, 13)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_95C54704_9FDB_1D60_41C0_05C63FA5C8FD_camera"
  },
  {
   "media": "this.panorama_95C1C33D_9FDA_F5A1_41CE_300BFF342ACD",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.playList_8A110B50_9FAD_15E0_41C4_59428D39A8DF, 13, 14)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_95C1C33D_9FDA_F5A1_41CE_300BFF342ACD_camera"
  },
  {
   "media": "this.panorama_95CAEEFE_9FD5_0CA3_41D7_698F49443639",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.playList_8A110B50_9FAD_15E0_41C4_59428D39A8DF, 14, 15)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_95CAEEFE_9FD5_0CA3_41D7_698F49443639_camera"
  },
  {
   "media": "this.panorama_95C3EA86_9FD5_1760_41E2_95D4D803E32C",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.playList_8A110B50_9FAD_15E0_41C4_59428D39A8DF, 15, 16)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_95C3EA86_9FD5_1760_41E2_95D4D803E32C_camera"
  },
  {
   "media": "this.panorama_95CFA5B7_9FD5_3CA0_41D7_984D6157F458",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.playList_8A110B50_9FAD_15E0_41C4_59428D39A8DF, 16, 17)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_95CFA5B7_9FD5_3CA0_41D7_984D6157F458_camera"
  },
  {
   "media": "this.panorama_95CF114F_9FD5_15E1_41E2_621FCC83952E",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.playList_8A110B50_9FAD_15E0_41C4_59428D39A8DF, 17, 18)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_95CF114F_9FD5_15E1_41E2_621FCC83952E_camera"
  },
  {
   "media": "this.panorama_95C81D0C_9FD5_0D60_41CD_3FBDFBA76D8F",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.playList_8A110B50_9FAD_15E0_41C4_59428D39A8DF, 18, 19)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_95C81D0C_9FD5_0D60_41CD_3FBDFBA76D8F_camera"
  },
  {
   "media": "this.panorama_95CCD7D5_9FD5_7CE0_41E2_994AB6AB0398",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.playList_8A110B50_9FAD_15E0_41C4_59428D39A8DF, 19, 20)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_95CCD7D5_9FD5_7CE0_41E2_994AB6AB0398_camera"
  },
  {
   "media": "this.panorama_95C82417_9FD5_1361_41DC_3FAAC71EAC58",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.playList_8A110B50_9FAD_15E0_41C4_59428D39A8DF, 20, 21)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_95C82417_9FD5_1361_41DC_3FAAC71EAC58_camera"
  },
  {
   "media": "this.panorama_84C1984D_9F6F_13E0_41E3_4A0E00713FF2",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.playList_8A110B50_9FAD_15E0_41C4_59428D39A8DF, 21, 0)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_84C1984D_9F6F_13E0_41E3_4A0E00713FF2_camera"
  }
 ],
 "id": "playList_8A110B50_9FAD_15E0_41C4_59428D39A8DF",
 "class": "PlayList"
},
{
 "adjacentPanoramas": [
  {
   "backwardYaw": -148.3,
   "yaw": -15.34,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_95CE85AF_9FDB_3CA0_41D3_1C2ACDD27F9A"
  },
  {
   "backwardYaw": -102.89,
   "yaw": -40.7,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_95CCB0E6_9FDB_14A0_4180_ADB9B7ACD63F"
  },
  {
   "backwardYaw": -60.34,
   "yaw": 119.66,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_95CE504E_9FDB_13E0_41D9_DFE773F2A116"
  },
  {
   "backwardYaw": -60.34,
   "yaw": -40.7,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_95CE504E_9FDB_13E0_41D9_DFE773F2A116"
  },
  {
   "backwardYaw": -60.34,
   "yaw": -15.34,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_95CE504E_9FDB_13E0_41D9_DFE773F2A116"
  },
  {
   "backwardYaw": -60.34,
   "yaw": -81.2,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_95CE504E_9FDB_13E0_41D9_DFE773F2A116"
  },
  {
   "backwardYaw": -79.98,
   "yaw": -81.2,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_95CAC973_9FDB_F5A0_41C2_2562D828735D"
  }
 ],
 "hfovMin": "135%",
 "hfov": 360,
 "label": "3",
 "id": "panorama_95CEAAFB_9FDB_14A1_41BB_DE23CE45C8B7",
 "thumbnailUrl": "media/panorama_95CEAAFB_9FDB_14A1_41BB_DE23CE45C8B7_t.jpg",
 "class": "Panorama",
 "pitch": 0,
 "partial": false,
 "hfovMax": 146,
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "top": {
    "levels": [
     {
      "url": "media/panorama_95CEAAFB_9FDB_14A1_41BB_DE23CE45C8B7_0/u/0/{row}_{column}.jpg",
      "rowCount": 5,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_95CEAAFB_9FDB_14A1_41BB_DE23CE45C8B7_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_95CEAAFB_9FDB_14A1_41BB_DE23CE45C8B7_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_95CEAAFB_9FDB_14A1_41BB_DE23CE45C8B7_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_95CEAAFB_9FDB_14A1_41BB_DE23CE45C8B7_0/r/0/{row}_{column}.jpg",
      "rowCount": 5,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_95CEAAFB_9FDB_14A1_41BB_DE23CE45C8B7_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_95CEAAFB_9FDB_14A1_41BB_DE23CE45C8B7_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_95CEAAFB_9FDB_14A1_41BB_DE23CE45C8B7_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_95CEAAFB_9FDB_14A1_41BB_DE23CE45C8B7_0/b/0/{row}_{column}.jpg",
      "rowCount": 5,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_95CEAAFB_9FDB_14A1_41BB_DE23CE45C8B7_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_95CEAAFB_9FDB_14A1_41BB_DE23CE45C8B7_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_95CEAAFB_9FDB_14A1_41BB_DE23CE45C8B7_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_95CEAAFB_9FDB_14A1_41BB_DE23CE45C8B7_0/d/0/{row}_{column}.jpg",
      "rowCount": 5,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_95CEAAFB_9FDB_14A1_41BB_DE23CE45C8B7_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_95CEAAFB_9FDB_14A1_41BB_DE23CE45C8B7_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_95CEAAFB_9FDB_14A1_41BB_DE23CE45C8B7_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_95CEAAFB_9FDB_14A1_41BB_DE23CE45C8B7_0/f/0/{row}_{column}.jpg",
      "rowCount": 5,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_95CEAAFB_9FDB_14A1_41BB_DE23CE45C8B7_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_95CEAAFB_9FDB_14A1_41BB_DE23CE45C8B7_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_95CEAAFB_9FDB_14A1_41BB_DE23CE45C8B7_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_95CEAAFB_9FDB_14A1_41BB_DE23CE45C8B7_0/l/0/{row}_{column}.jpg",
      "rowCount": 5,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_95CEAAFB_9FDB_14A1_41BB_DE23CE45C8B7_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_95CEAAFB_9FDB_14A1_41BB_DE23CE45C8B7_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_95CEAAFB_9FDB_14A1_41BB_DE23CE45C8B7_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_95CEAAFB_9FDB_14A1_41BB_DE23CE45C8B7_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_8EDE61B1_9FBD_14A0_41C5_CC622FF859EF",
  "this.overlay_8EB8B2C1_9FBA_F4E0_41A0_B48B121CD770",
  "this.overlay_8DC96DD1_9FBB_0CE0_41D8_87D217275DFD",
  "this.overlay_8E8BA3A0_9FBB_14A0_41DE_78D61DEFE3DB"
 ]
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "hfov": 150,
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "id": "panorama_95CCB0E6_9FDB_14A0_4180_ADB9B7ACD63F_camera"
},
{
 "adjacentPanoramas": [
  {
   "backwardYaw": 82.23,
   "yaw": 125.8,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_95C97891_9FDB_7361_41D1_B7C6EA5B15A2"
  },
  {
   "backwardYaw": 60.84,
   "yaw": -18.61,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_95C82417_9FD5_1361_41DC_3FAAC71EAC58"
  },
  {
   "panorama": "this.panorama_95CE504E_9FDB_13E0_41D9_DFE773F2A116",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_95CE504E_9FDB_13E0_41D9_DFE773F2A116",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_95CE504E_9FDB_13E0_41D9_DFE773F2A116",
   "class": "AdjacentPanorama"
  },
  {
   "backwardYaw": 98.39,
   "yaw": -157.3,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_95CAC973_9FDB_F5A0_41C2_2562D828735D"
  }
 ],
 "hfovMin": "150%",
 "hfov": 360,
 "label": "8",
 "id": "panorama_95CABCDA_9FDB_0CE3_41CA_DA649A270AE4",
 "thumbnailUrl": "media/panorama_95CABCDA_9FDB_0CE3_41CA_DA649A270AE4_t.jpg",
 "class": "Panorama",
 "pitch": 0,
 "partial": false,
 "hfovMax": 150,
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "top": {
    "levels": [
     {
      "url": "media/panorama_95CABCDA_9FDB_0CE3_41CA_DA649A270AE4_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_95CABCDA_9FDB_0CE3_41CA_DA649A270AE4_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_95CABCDA_9FDB_0CE3_41CA_DA649A270AE4_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_95CABCDA_9FDB_0CE3_41CA_DA649A270AE4_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_95CABCDA_9FDB_0CE3_41CA_DA649A270AE4_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_95CABCDA_9FDB_0CE3_41CA_DA649A270AE4_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_95CABCDA_9FDB_0CE3_41CA_DA649A270AE4_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_95CABCDA_9FDB_0CE3_41CA_DA649A270AE4_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_95CABCDA_9FDB_0CE3_41CA_DA649A270AE4_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_95CABCDA_9FDB_0CE3_41CA_DA649A270AE4_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_95CABCDA_9FDB_0CE3_41CA_DA649A270AE4_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_95CABCDA_9FDB_0CE3_41CA_DA649A270AE4_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_95CABCDA_9FDB_0CE3_41CA_DA649A270AE4_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_95CABCDA_9FDB_0CE3_41CA_DA649A270AE4_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_95CABCDA_9FDB_0CE3_41CA_DA649A270AE4_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_95CABCDA_9FDB_0CE3_41CA_DA649A270AE4_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_95CABCDA_9FDB_0CE3_41CA_DA649A270AE4_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_95CABCDA_9FDB_0CE3_41CA_DA649A270AE4_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_95CABCDA_9FDB_0CE3_41CA_DA649A270AE4_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_8BE16F2A_9F5B_0DA0_41D0_1E7FAC194524",
  "this.overlay_8B498043_9F5D_13E0_41DA_AE746D734613",
  "this.overlay_8A607EC9_9F6D_0CE0_41DF_B1B3DA30520E"
 ]
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "hfov": 150,
  "class": "PanoramaCameraPosition",
  "yaw": -54.2,
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "id": "camera_ACF0B9CF_A002_C0BC_41E2_7D9A8ABBC521"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "hfov": 150,
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "id": "panorama_95CF114F_9FD5_15E1_41E2_621FCC83952E_camera"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "hfov": 150,
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "id": "panorama_95C1C33D_9FDA_F5A1_41CE_300BFF342ACD_camera"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "hfov": 150,
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "id": "panorama_95C97891_9FDB_7361_41D1_B7C6EA5B15A2_camera"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "hfov": 150,
  "class": "PanoramaCameraPosition",
  "yaw": -170.39,
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "id": "camera_AD81DAA6_A002_C0EC_41C2_A9E4F63F7FDC"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "hfov": 150,
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "id": "panorama_95C81D0C_9FD5_0D60_41CD_3FBDFBA76D8F_camera"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "hfov": 150,
  "class": "PanoramaCameraPosition",
  "yaw": -97.77,
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "id": "camera_AC42890F_A002_C1BC_41DE_2CE2C6D03B7B"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "id": "panorama_95CE3FFF_9FDB_0CA0_41E1_9D3191535A8B_camera"
},
{
 "adjacentPanoramas": [
  {
   "backwardYaw": 125.8,
   "yaw": 82.23,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_95CABCDA_9FDB_0CE3_41CA_DA649A270AE4"
  },
  {
   "panorama": "this.panorama_95CE504E_9FDB_13E0_41D9_DFE773F2A116",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_95CE504E_9FDB_13E0_41D9_DFE773F2A116",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_95CE504E_9FDB_13E0_41D9_DFE773F2A116",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_95CE504E_9FDB_13E0_41D9_DFE773F2A116",
   "class": "AdjacentPanorama"
  },
  {
   "backwardYaw": -156.89,
   "yaw": -42.75,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_95CE3FFF_9FDB_0CA0_41E1_9D3191535A8B"
  },
  {
   "backwardYaw": 173.66,
   "yaw": -163.02,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_95CE5B5B_9FDB_35E0_41AD_756AF7314A45"
  },
  {
   "backwardYaw": -120.89,
   "yaw": -6.75,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_95CB7498_9FDB_136F_41E0_0D45B7441953"
  }
 ],
 "hfovMin": "150%",
 "hfov": 360,
 "label": "9",
 "id": "panorama_95C97891_9FDB_7361_41D1_B7C6EA5B15A2",
 "thumbnailUrl": "media/panorama_95C97891_9FDB_7361_41D1_B7C6EA5B15A2_t.jpg",
 "class": "Panorama",
 "pitch": 0,
 "partial": false,
 "hfovMax": 150,
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "top": {
    "levels": [
     {
      "url": "media/panorama_95C97891_9FDB_7361_41D1_B7C6EA5B15A2_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_95C97891_9FDB_7361_41D1_B7C6EA5B15A2_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_95C97891_9FDB_7361_41D1_B7C6EA5B15A2_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_95C97891_9FDB_7361_41D1_B7C6EA5B15A2_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_95C97891_9FDB_7361_41D1_B7C6EA5B15A2_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_95C97891_9FDB_7361_41D1_B7C6EA5B15A2_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_95C97891_9FDB_7361_41D1_B7C6EA5B15A2_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_95C97891_9FDB_7361_41D1_B7C6EA5B15A2_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_95C97891_9FDB_7361_41D1_B7C6EA5B15A2_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_95C97891_9FDB_7361_41D1_B7C6EA5B15A2_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_95C97891_9FDB_7361_41D1_B7C6EA5B15A2_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_95C97891_9FDB_7361_41D1_B7C6EA5B15A2_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_95C97891_9FDB_7361_41D1_B7C6EA5B15A2_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_95C97891_9FDB_7361_41D1_B7C6EA5B15A2_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_95C97891_9FDB_7361_41D1_B7C6EA5B15A2_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_95C97891_9FDB_7361_41D1_B7C6EA5B15A2_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_95C97891_9FDB_7361_41D1_B7C6EA5B15A2_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_95C97891_9FDB_7361_41D1_B7C6EA5B15A2_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_95C97891_9FDB_7361_41D1_B7C6EA5B15A2_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_8A765755_9F6F_1DE1_41A1_ACA63CE9AA66",
  "this.overlay_89C6DDC2_9F6D_0CE3_41D1_773FFDA55992",
  "this.overlay_89A67728_9F6D_1DA0_41D0_9730D4D65EA3",
  "this.overlay_8A181DA5_9F75_0CA0_41DC_1D2B321EDF1F"
 ]
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "hfov": 150,
  "class": "PanoramaCameraPosition",
  "yaw": 88.16,
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "id": "camera_AC6F493B_A002_C1E4_41C6_D05D6355C7E4"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "hfov": 150,
  "class": "PanoramaCameraPosition",
  "yaw": -96.75,
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "id": "camera_AC36C901_A002_C1A4_41E3_AEF56FC4D55C"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "hfov": 150,
  "class": "PanoramaCameraPosition",
  "yaw": 158.61,
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "id": "camera_AD907AB4_A002_C0EC_41D0_A887A50A9085"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "hfov": 150,
  "class": "PanoramaCameraPosition",
  "yaw": 16.98,
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "id": "camera_ACA53975_A002_C06C_41C7_7EE16FDD34B8"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "hfov": 150,
  "class": "PanoramaCameraPosition",
  "yaw": 8.06,
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "id": "camera_AC1EB8E4_A002_C063_41D1_E7C116B002F6"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "hfov": 150,
  "class": "PanoramaCameraPosition",
  "yaw": 119.66,
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "id": "camera_ABECEB37_A002_C1EC_41DF_ABF853117BE7"
},
{
 "adjacentPanoramas": [
  {
   "backwardYaw": -163.02,
   "yaw": 173.66,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_95C97891_9FDB_7361_41D1_B7C6EA5B15A2"
  },
  {
   "panorama": "this.panorama_95CE504E_9FDB_13E0_41D9_DFE773F2A116",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_95CE504E_9FDB_13E0_41D9_DFE773F2A116",
   "class": "AdjacentPanorama"
  },
  {
   "backwardYaw": 70.57,
   "yaw": 45.2,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_95CAEEFE_9FD5_0CA3_41D7_698F49443639"
  }
 ],
 "hfovMin": "150%",
 "hfov": 360,
 "label": "12",
 "id": "panorama_95CE5B5B_9FDB_35E0_41AD_756AF7314A45",
 "thumbnailUrl": "media/panorama_95CE5B5B_9FDB_35E0_41AD_756AF7314A45_t.jpg",
 "class": "Panorama",
 "pitch": 0,
 "partial": false,
 "hfovMax": 150,
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "top": {
    "levels": [
     {
      "url": "media/panorama_95CE5B5B_9FDB_35E0_41AD_756AF7314A45_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_95CE5B5B_9FDB_35E0_41AD_756AF7314A45_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_95CE5B5B_9FDB_35E0_41AD_756AF7314A45_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_95CE5B5B_9FDB_35E0_41AD_756AF7314A45_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_95CE5B5B_9FDB_35E0_41AD_756AF7314A45_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_95CE5B5B_9FDB_35E0_41AD_756AF7314A45_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_95CE5B5B_9FDB_35E0_41AD_756AF7314A45_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_95CE5B5B_9FDB_35E0_41AD_756AF7314A45_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_95CE5B5B_9FDB_35E0_41AD_756AF7314A45_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_95CE5B5B_9FDB_35E0_41AD_756AF7314A45_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_95CE5B5B_9FDB_35E0_41AD_756AF7314A45_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_95CE5B5B_9FDB_35E0_41AD_756AF7314A45_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_95CE5B5B_9FDB_35E0_41AD_756AF7314A45_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_95CE5B5B_9FDB_35E0_41AD_756AF7314A45_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_95CE5B5B_9FDB_35E0_41AD_756AF7314A45_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_95CE5B5B_9FDB_35E0_41AD_756AF7314A45_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_95CE5B5B_9FDB_35E0_41AD_756AF7314A45_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_95CE5B5B_9FDB_35E0_41AD_756AF7314A45_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_95CE5B5B_9FDB_35E0_41AD_756AF7314A45_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_88F3FE72_9F75_0FA1_41A3_0EFE77D3029C",
  "this.overlay_888DBA80_9F7B_3760_41C3_DCC382118E5D"
 ]
},
{
 "adjacentPanoramas": [
  {
   "backwardYaw": -7.57,
   "yaw": 102.56,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_95CF114F_9FD5_15E1_41E2_621FCC83952E"
  },
  {
   "panorama": "this.panorama_95CABCDA_9FDB_0CE3_41CA_DA649A270AE4",
   "class": "AdjacentPanorama"
  }
 ],
 "hfovMin": "150%",
 "hfov": 360,
 "label": "22",
 "id": "panorama_84C1984D_9F6F_13E0_41E3_4A0E00713FF2",
 "thumbnailUrl": "media/panorama_84C1984D_9F6F_13E0_41E3_4A0E00713FF2_t.jpg",
 "class": "Panorama",
 "pitch": 0,
 "partial": false,
 "hfovMax": 130,
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "top": {
    "levels": [
     {
      "url": "media/panorama_84C1984D_9F6F_13E0_41E3_4A0E00713FF2_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_84C1984D_9F6F_13E0_41E3_4A0E00713FF2_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_84C1984D_9F6F_13E0_41E3_4A0E00713FF2_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_84C1984D_9F6F_13E0_41E3_4A0E00713FF2_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_84C1984D_9F6F_13E0_41E3_4A0E00713FF2_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_84C1984D_9F6F_13E0_41E3_4A0E00713FF2_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_84C1984D_9F6F_13E0_41E3_4A0E00713FF2_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_84C1984D_9F6F_13E0_41E3_4A0E00713FF2_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_84C1984D_9F6F_13E0_41E3_4A0E00713FF2_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_84C1984D_9F6F_13E0_41E3_4A0E00713FF2_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_84C1984D_9F6F_13E0_41E3_4A0E00713FF2_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_84C1984D_9F6F_13E0_41E3_4A0E00713FF2_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_84C1984D_9F6F_13E0_41E3_4A0E00713FF2_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_84C1984D_9F6F_13E0_41E3_4A0E00713FF2_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_84C1984D_9F6F_13E0_41E3_4A0E00713FF2_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_84C1984D_9F6F_13E0_41E3_4A0E00713FF2_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_84C1984D_9F6F_13E0_41E3_4A0E00713FF2_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_84C1984D_9F6F_13E0_41E3_4A0E00713FF2_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_84C1984D_9F6F_13E0_41E3_4A0E00713FF2_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_833A423C_9F6D_37A0_41C7_8F534632302B"
 ]
},
{
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_95CE504E_9FDB_13E0_41D9_DFE773F2A116",
   "class": "AdjacentPanorama"
  },
  {
   "backwardYaw": -15.34,
   "yaw": -148.3,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_95CEAAFB_9FDB_14A1_41BB_DE23CE45C8B7"
  }
 ],
 "hfovMin": "150%",
 "hfov": 360,
 "label": "6",
 "id": "panorama_95CE85AF_9FDB_3CA0_41D3_1C2ACDD27F9A",
 "thumbnailUrl": "media/panorama_95CE85AF_9FDB_3CA0_41D3_1C2ACDD27F9A_t.jpg",
 "class": "Panorama",
 "pitch": 0,
 "partial": false,
 "hfovMax": 150,
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "top": {
    "levels": [
     {
      "url": "media/panorama_95CE85AF_9FDB_3CA0_41D3_1C2ACDD27F9A_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_95CE85AF_9FDB_3CA0_41D3_1C2ACDD27F9A_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_95CE85AF_9FDB_3CA0_41D3_1C2ACDD27F9A_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_95CE85AF_9FDB_3CA0_41D3_1C2ACDD27F9A_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_95CE85AF_9FDB_3CA0_41D3_1C2ACDD27F9A_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_95CE85AF_9FDB_3CA0_41D3_1C2ACDD27F9A_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_95CE85AF_9FDB_3CA0_41D3_1C2ACDD27F9A_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_95CE85AF_9FDB_3CA0_41D3_1C2ACDD27F9A_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_95CE85AF_9FDB_3CA0_41D3_1C2ACDD27F9A_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_95CE85AF_9FDB_3CA0_41D3_1C2ACDD27F9A_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_95CE85AF_9FDB_3CA0_41D3_1C2ACDD27F9A_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_95CE85AF_9FDB_3CA0_41D3_1C2ACDD27F9A_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_95CE85AF_9FDB_3CA0_41D3_1C2ACDD27F9A_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_95CE85AF_9FDB_3CA0_41D3_1C2ACDD27F9A_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_95CE85AF_9FDB_3CA0_41D3_1C2ACDD27F9A_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_95CE85AF_9FDB_3CA0_41D3_1C2ACDD27F9A_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_95CE85AF_9FDB_3CA0_41D3_1C2ACDD27F9A_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_95CE85AF_9FDB_3CA0_41D3_1C2ACDD27F9A_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_95CE85AF_9FDB_3CA0_41D3_1C2ACDD27F9A_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_8C0931D9_9FB5_34E0_41C9_1CD36C868DB3"
 ]
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "hfov": 150,
  "class": "PanoramaCameraPosition",
  "yaw": 51.75,
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "id": "camera_AD64EA89_A002_C0A4_41CE_9CB96F59F1A9"
},
{
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_95CE504E_9FDB_13E0_41D9_DFE773F2A116",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_95CE504E_9FDB_13E0_41D9_DFE773F2A116",
   "class": "AdjacentPanorama"
  },
  {
   "backwardYaw": 169.98,
   "yaw": -173.66,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_95CAEEFE_9FD5_0CA3_41D7_698F49443639"
  },
  {
   "backwardYaw": -174.07,
   "yaw": 9.61,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_95C1C33D_9FDA_F5A1_41CE_300BFF342ACD"
  }
 ],
 "hfovMin": "150%",
 "hfov": 360,
 "label": "13",
 "id": "panorama_95C54704_9FDB_1D60_41C0_05C63FA5C8FD",
 "thumbnailUrl": "media/panorama_95C54704_9FDB_1D60_41C0_05C63FA5C8FD_t.jpg",
 "class": "Panorama",
 "pitch": 0,
 "partial": false,
 "hfovMax": 150,
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "top": {
    "levels": [
     {
      "url": "media/panorama_95C54704_9FDB_1D60_41C0_05C63FA5C8FD_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_95C54704_9FDB_1D60_41C0_05C63FA5C8FD_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_95C54704_9FDB_1D60_41C0_05C63FA5C8FD_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_95C54704_9FDB_1D60_41C0_05C63FA5C8FD_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_95C54704_9FDB_1D60_41C0_05C63FA5C8FD_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_95C54704_9FDB_1D60_41C0_05C63FA5C8FD_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_95C54704_9FDB_1D60_41C0_05C63FA5C8FD_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_95C54704_9FDB_1D60_41C0_05C63FA5C8FD_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_95C54704_9FDB_1D60_41C0_05C63FA5C8FD_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_95C54704_9FDB_1D60_41C0_05C63FA5C8FD_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_95C54704_9FDB_1D60_41C0_05C63FA5C8FD_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_95C54704_9FDB_1D60_41C0_05C63FA5C8FD_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_95C54704_9FDB_1D60_41C0_05C63FA5C8FD_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_95C54704_9FDB_1D60_41C0_05C63FA5C8FD_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_95C54704_9FDB_1D60_41C0_05C63FA5C8FD_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_95C54704_9FDB_1D60_41C0_05C63FA5C8FD_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_95C54704_9FDB_1D60_41C0_05C63FA5C8FD_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_95C54704_9FDB_1D60_41C0_05C63FA5C8FD_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_95C54704_9FDB_1D60_41C0_05C63FA5C8FD_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_874E8C38_9F7D_33A0_41DE_457B410149FE",
  "this.overlay_85A05FA2_9F7B_0CA0_41C3_6B40E5D4BD7E"
 ]
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -77.44,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "id": "camera_AC2AB8F3_A002_C064_41B4_DDA58C2B388F"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "hfov": 150,
  "class": "PanoramaCameraPosition",
  "yaw": -109.43,
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "id": "camera_ACB40984_A002_C0A3_41B0_0649C9EAB4AF"
},
{
 "adjacentPanoramas": [
  {
   "backwardYaw": 142.57,
   "yaw": -24.34,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_95CE504E_9FDB_13E0_41D9_DFE773F2A116"
  }
 ],
 "hfovMin": "135%",
 "hfov": 360,
 "label": "01",
 "id": "panorama_94D2B3E3_9FDB_34A0_41DB_B63416D1D5CD",
 "thumbnailUrl": "media/panorama_94D2B3E3_9FDB_34A0_41DB_B63416D1D5CD_t.jpg",
 "class": "Panorama",
 "pitch": 0,
 "partial": false,
 "hfovMax": 102,
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "top": {
    "levels": [
     {
      "url": "media/panorama_94D2B3E3_9FDB_34A0_41DB_B63416D1D5CD_0/u/0/{row}_{column}.jpg",
      "rowCount": 5,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_94D2B3E3_9FDB_34A0_41DB_B63416D1D5CD_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_94D2B3E3_9FDB_34A0_41DB_B63416D1D5CD_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_94D2B3E3_9FDB_34A0_41DB_B63416D1D5CD_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_94D2B3E3_9FDB_34A0_41DB_B63416D1D5CD_0/r/0/{row}_{column}.jpg",
      "rowCount": 5,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_94D2B3E3_9FDB_34A0_41DB_B63416D1D5CD_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_94D2B3E3_9FDB_34A0_41DB_B63416D1D5CD_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_94D2B3E3_9FDB_34A0_41DB_B63416D1D5CD_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_94D2B3E3_9FDB_34A0_41DB_B63416D1D5CD_0/b/0/{row}_{column}.jpg",
      "rowCount": 5,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_94D2B3E3_9FDB_34A0_41DB_B63416D1D5CD_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_94D2B3E3_9FDB_34A0_41DB_B63416D1D5CD_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_94D2B3E3_9FDB_34A0_41DB_B63416D1D5CD_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_94D2B3E3_9FDB_34A0_41DB_B63416D1D5CD_0/d/0/{row}_{column}.jpg",
      "rowCount": 5,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_94D2B3E3_9FDB_34A0_41DB_B63416D1D5CD_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_94D2B3E3_9FDB_34A0_41DB_B63416D1D5CD_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_94D2B3E3_9FDB_34A0_41DB_B63416D1D5CD_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_94D2B3E3_9FDB_34A0_41DB_B63416D1D5CD_0/f/0/{row}_{column}.jpg",
      "rowCount": 5,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_94D2B3E3_9FDB_34A0_41DB_B63416D1D5CD_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_94D2B3E3_9FDB_34A0_41DB_B63416D1D5CD_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_94D2B3E3_9FDB_34A0_41DB_B63416D1D5CD_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_94D2B3E3_9FDB_34A0_41DB_B63416D1D5CD_0/l/0/{row}_{column}.jpg",
      "rowCount": 5,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_94D2B3E3_9FDB_34A0_41DB_B63416D1D5CD_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_94D2B3E3_9FDB_34A0_41DB_B63416D1D5CD_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_94D2B3E3_9FDB_34A0_41DB_B63416D1D5CD_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_94D2B3E3_9FDB_34A0_41DB_B63416D1D5CD_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_8F82A3F3_9FBD_74A1_4193_1B36E32DF35C"
 ]
},
{
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_95CE504E_9FDB_13E0_41D9_DFE773F2A116",
   "class": "AdjacentPanorama"
  },
  {
   "backwardYaw": -6.75,
   "yaw": -120.89,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_95C97891_9FDB_7361_41D1_B7C6EA5B15A2"
  }
 ],
 "hfovMin": "150%",
 "hfov": 360,
 "label": "10",
 "id": "panorama_95CB7498_9FDB_136F_41E0_0D45B7441953",
 "thumbnailUrl": "media/panorama_95CB7498_9FDB_136F_41E0_0D45B7441953_t.jpg",
 "class": "Panorama",
 "pitch": 0,
 "partial": false,
 "hfovMax": 150,
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "top": {
    "levels": [
     {
      "url": "media/panorama_95CB7498_9FDB_136F_41E0_0D45B7441953_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_95CB7498_9FDB_136F_41E0_0D45B7441953_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_95CB7498_9FDB_136F_41E0_0D45B7441953_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_95CB7498_9FDB_136F_41E0_0D45B7441953_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_95CB7498_9FDB_136F_41E0_0D45B7441953_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_95CB7498_9FDB_136F_41E0_0D45B7441953_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_95CB7498_9FDB_136F_41E0_0D45B7441953_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_95CB7498_9FDB_136F_41E0_0D45B7441953_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_95CB7498_9FDB_136F_41E0_0D45B7441953_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_95CB7498_9FDB_136F_41E0_0D45B7441953_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_95CB7498_9FDB_136F_41E0_0D45B7441953_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_95CB7498_9FDB_136F_41E0_0D45B7441953_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_95CB7498_9FDB_136F_41E0_0D45B7441953_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_95CB7498_9FDB_136F_41E0_0D45B7441953_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_95CB7498_9FDB_136F_41E0_0D45B7441953_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_95CB7498_9FDB_136F_41E0_0D45B7441953_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_95CB7498_9FDB_136F_41E0_0D45B7441953_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_95CB7498_9FDB_136F_41E0_0D45B7441953_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_95CB7498_9FDB_136F_41E0_0D45B7441953_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_89A73A2D_9F77_17A0_41DF_4A4D39748543"
 ]
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "hfov": 99,
  "class": "PanoramaCameraPosition",
  "yaw": -119.16,
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "id": "camera_AC52491E_A002_C1DC_41E1_B31557BDB29F"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "hfov": 150,
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "id": "panorama_95CFA5B7_9FD5_3CA0_41D7_984D6157F458_camera"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "hfov": 150,
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "id": "panorama_95C3EA86_9FD5_1760_41E2_95D4D803E32C_camera"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 59.11,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "id": "camera_AD1FCA19_A002_C3A4_41D8_DE9D80A2B3F7"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "hfov": 146,
  "class": "PanoramaCameraPosition",
  "yaw": 98.8,
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "id": "camera_AD553A7A_A002_C064_41E1_B3263D369C6A"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "hfov": 150,
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "id": "panorama_95C54704_9FDB_1D60_41C0_05C63FA5C8FD_camera"
},
{
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_95CE504E_9FDB_13E0_41D9_DFE773F2A116",
   "class": "AdjacentPanorama"
  },
  {
   "backwardYaw": 9.61,
   "yaw": -174.07,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_95C54704_9FDB_1D60_41C0_05C63FA5C8FD"
  }
 ],
 "hfovMin": "150%",
 "hfov": 360,
 "label": "14",
 "id": "panorama_95C1C33D_9FDA_F5A1_41CE_300BFF342ACD",
 "thumbnailUrl": "media/panorama_95C1C33D_9FDA_F5A1_41CE_300BFF342ACD_t.jpg",
 "class": "Panorama",
 "pitch": 0,
 "partial": false,
 "hfovMax": 150,
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "top": {
    "levels": [
     {
      "url": "media/panorama_95C1C33D_9FDA_F5A1_41CE_300BFF342ACD_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_95C1C33D_9FDA_F5A1_41CE_300BFF342ACD_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_95C1C33D_9FDA_F5A1_41CE_300BFF342ACD_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_95C1C33D_9FDA_F5A1_41CE_300BFF342ACD_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_95C1C33D_9FDA_F5A1_41CE_300BFF342ACD_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_95C1C33D_9FDA_F5A1_41CE_300BFF342ACD_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_95C1C33D_9FDA_F5A1_41CE_300BFF342ACD_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_95C1C33D_9FDA_F5A1_41CE_300BFF342ACD_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_95C1C33D_9FDA_F5A1_41CE_300BFF342ACD_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_95C1C33D_9FDA_F5A1_41CE_300BFF342ACD_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_95C1C33D_9FDA_F5A1_41CE_300BFF342ACD_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_95C1C33D_9FDA_F5A1_41CE_300BFF342ACD_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_95C1C33D_9FDA_F5A1_41CE_300BFF342ACD_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_95C1C33D_9FDA_F5A1_41CE_300BFF342ACD_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_95C1C33D_9FDA_F5A1_41CE_300BFF342ACD_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_95C1C33D_9FDA_F5A1_41CE_300BFF342ACD_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_95C1C33D_9FDA_F5A1_41CE_300BFF342ACD_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_95C1C33D_9FDA_F5A1_41CE_300BFF342ACD_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_95C1C33D_9FDA_F5A1_41CE_300BFF342ACD_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_86C9E48B_9F7B_1360_41B3_3E664E3DDFBB"
 ]
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "hfov": 150,
  "class": "PanoramaCameraPosition",
  "yaw": 170.39,
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "id": "camera_ABC5686E_A002_C07C_41B9_563B387C92DE"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "hfov": 150,
  "class": "PanoramaCameraPosition",
  "yaw": 173.25,
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "id": "camera_ADA04AC3_A002_C0A4_41B1_19EC5BCFD269"
},
{
 "adjacentPanoramas": [
  {
   "backwardYaw": 91.84,
   "yaw": -171.94,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_95CF114F_9FD5_15E1_41E2_621FCC83952E"
  },
  {
   "panorama": "this.panorama_95CABCDA_9FDB_0CE3_41CA_DA649A270AE4",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_95CABCDA_9FDB_0CE3_41CA_DA649A270AE4",
   "class": "AdjacentPanorama"
  },
  {
   "backwardYaw": -81.53,
   "yaw": -21.39,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_95CCD7D5_9FD5_7CE0_41E2_994AB6AB0398"
  }
 ],
 "hfovMin": "150%",
 "hfov": 360,
 "label": "19",
 "id": "panorama_95C81D0C_9FD5_0D60_41CD_3FBDFBA76D8F",
 "thumbnailUrl": "media/panorama_95C81D0C_9FD5_0D60_41CD_3FBDFBA76D8F_t.jpg",
 "class": "Panorama",
 "pitch": 0,
 "partial": false,
 "hfovMax": 150,
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "top": {
    "levels": [
     {
      "url": "media/panorama_95C81D0C_9FD5_0D60_41CD_3FBDFBA76D8F_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_95C81D0C_9FD5_0D60_41CD_3FBDFBA76D8F_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_95C81D0C_9FD5_0D60_41CD_3FBDFBA76D8F_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_95C81D0C_9FD5_0D60_41CD_3FBDFBA76D8F_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_95C81D0C_9FD5_0D60_41CD_3FBDFBA76D8F_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_95C81D0C_9FD5_0D60_41CD_3FBDFBA76D8F_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_95C81D0C_9FD5_0D60_41CD_3FBDFBA76D8F_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_95C81D0C_9FD5_0D60_41CD_3FBDFBA76D8F_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_95C81D0C_9FD5_0D60_41CD_3FBDFBA76D8F_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_95C81D0C_9FD5_0D60_41CD_3FBDFBA76D8F_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_95C81D0C_9FD5_0D60_41CD_3FBDFBA76D8F_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_95C81D0C_9FD5_0D60_41CD_3FBDFBA76D8F_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_95C81D0C_9FD5_0D60_41CD_3FBDFBA76D8F_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_95C81D0C_9FD5_0D60_41CD_3FBDFBA76D8F_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_95C81D0C_9FD5_0D60_41CD_3FBDFBA76D8F_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_95C81D0C_9FD5_0D60_41CD_3FBDFBA76D8F_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_95C81D0C_9FD5_0D60_41CD_3FBDFBA76D8F_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_95C81D0C_9FD5_0D60_41CD_3FBDFBA76D8F_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_95C81D0C_9FD5_0D60_41CD_3FBDFBA76D8F_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_82DF49FE_9F6B_14A0_41B7_F5B88F02D4BB",
  "this.overlay_82AF29E3_9F6B_14A1_41DD_42E3612CBB53"
 ]
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "hfov": 150,
  "class": "PanoramaCameraPosition",
  "yaw": 119.66,
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "id": "camera_ADD29AEF_A002_C07C_4192_079290075BDF"
},
{
 "adjacentPanoramas": [
  {
   "backwardYaw": -18.61,
   "yaw": 60.84,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_95CABCDA_9FDB_0CE3_41CA_DA649A270AE4"
  }
 ],
 "hfovMin": "150%",
 "hfov": 360,
 "label": "21",
 "id": "panorama_95C82417_9FD5_1361_41DC_3FAAC71EAC58",
 "thumbnailUrl": "media/panorama_95C82417_9FD5_1361_41DC_3FAAC71EAC58_t.jpg",
 "class": "Panorama",
 "pitch": 0,
 "partial": false,
 "hfovMax": 147,
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "top": {
    "levels": [
     {
      "url": "media/panorama_95C82417_9FD5_1361_41DC_3FAAC71EAC58_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_95C82417_9FD5_1361_41DC_3FAAC71EAC58_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_95C82417_9FD5_1361_41DC_3FAAC71EAC58_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_95C82417_9FD5_1361_41DC_3FAAC71EAC58_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_95C82417_9FD5_1361_41DC_3FAAC71EAC58_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_95C82417_9FD5_1361_41DC_3FAAC71EAC58_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_95C82417_9FD5_1361_41DC_3FAAC71EAC58_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_95C82417_9FD5_1361_41DC_3FAAC71EAC58_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_95C82417_9FD5_1361_41DC_3FAAC71EAC58_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_95C82417_9FD5_1361_41DC_3FAAC71EAC58_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_95C82417_9FD5_1361_41DC_3FAAC71EAC58_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_95C82417_9FD5_1361_41DC_3FAAC71EAC58_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_95C82417_9FD5_1361_41DC_3FAAC71EAC58_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_95C82417_9FD5_1361_41DC_3FAAC71EAC58_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_95C82417_9FD5_1361_41DC_3FAAC71EAC58_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_95C82417_9FD5_1361_41DC_3FAAC71EAC58_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_95C82417_9FD5_1361_41DC_3FAAC71EAC58_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_95C82417_9FD5_1361_41DC_3FAAC71EAC58_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_95C82417_9FD5_1361_41DC_3FAAC71EAC58_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_90E6F50E_9FB5_1D60_41E1_F4D1FA643FC7"
 ]
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "hfov": 146,
  "class": "PanoramaCameraPosition",
  "yaw": -60.34,
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "id": "camera_AD288A32_A002_C3E4_41C0_20B240E260D9"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "id": "panorama_95CE5B5B_9FDB_35E0_41AD_756AF7314A45_camera"
},
{
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_95CE504E_9FDB_13E0_41D9_DFE773F2A116",
   "class": "AdjacentPanorama"
  },
  {
   "backwardYaw": -32.11,
   "yaw": -128.25,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_95CAC973_9FDB_F5A0_41C2_2562D828735D"
  }
 ],
 "hfovMin": "150%",
 "hfov": 360,
 "label": "5",
 "id": "panorama_95C8483B_9FDB_13A0_41D9_A9354A49ED83",
 "thumbnailUrl": "media/panorama_95C8483B_9FDB_13A0_41D9_A9354A49ED83_t.jpg",
 "class": "Panorama",
 "pitch": 0,
 "partial": false,
 "hfovMax": 150,
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "top": {
    "levels": [
     {
      "url": "media/panorama_95C8483B_9FDB_13A0_41D9_A9354A49ED83_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_95C8483B_9FDB_13A0_41D9_A9354A49ED83_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_95C8483B_9FDB_13A0_41D9_A9354A49ED83_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_95C8483B_9FDB_13A0_41D9_A9354A49ED83_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_95C8483B_9FDB_13A0_41D9_A9354A49ED83_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_95C8483B_9FDB_13A0_41D9_A9354A49ED83_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_95C8483B_9FDB_13A0_41D9_A9354A49ED83_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_95C8483B_9FDB_13A0_41D9_A9354A49ED83_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_95C8483B_9FDB_13A0_41D9_A9354A49ED83_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_95C8483B_9FDB_13A0_41D9_A9354A49ED83_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_95C8483B_9FDB_13A0_41D9_A9354A49ED83_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_95C8483B_9FDB_13A0_41D9_A9354A49ED83_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_95C8483B_9FDB_13A0_41D9_A9354A49ED83_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_95C8483B_9FDB_13A0_41D9_A9354A49ED83_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_95C8483B_9FDB_13A0_41D9_A9354A49ED83_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_95C8483B_9FDB_13A0_41D9_A9354A49ED83_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_95C8483B_9FDB_13A0_41D9_A9354A49ED83_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_95C8483B_9FDB_13A0_41D9_A9354A49ED83_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_95C8483B_9FDB_13A0_41D9_A9354A49ED83_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_8C1D4F28_9F55_0DA0_41D1_B7051D14B7EC"
 ]
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "hfov": 150,
  "class": "PanoramaCameraPosition",
  "yaw": 147.89,
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "id": "camera_ACC60992_A002_C0A4_41CB_760ABBDACFAE"
},
{
 "displayOriginPosition": {
  "hfov": 165,
  "stereographicFactor": 1,
  "class": "RotationalCameraDisplayPosition",
  "yaw": 0,
  "pitch": -90
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "hfov": 102,
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "id": "panorama_94D2B3E3_9FDB_34A0_41DB_B63416D1D5CD_camera",
 "displayMovements": [
  {
   "easing": "linear",
   "class": "TargetRotationalCameraDisplayMovement",
   "duration": 1000
  },
  {
   "targetPitch": 0,
   "targetStereographicFactor": 0,
   "class": "TargetRotationalCameraDisplayMovement",
   "easing": "cubic_in_out",
   "duration": 3000,
   "targetHfov": 102
  }
 ]
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "hfov": 150,
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "id": "panorama_95CE85AF_9FDB_3CA0_41D3_1C2ACDD27F9A_camera"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -6.34,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "id": "camera_AD0D7A00_A002_C3A4_41DE_BE47C9D9C73C"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "hfov": 150,
  "class": "PanoramaCameraPosition",
  "yaw": 137.25,
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "id": "camera_AC0518C7_A002_C0AC_41D7_FDA238636995"
},
{
 "transitionDuration": 500,
 "data": {
  "name": "Main Viewer"
 },
 "progressBackgroundColorDirection": "vertical",
 "id": "MainViewer",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "playbackBarBottom": 5,
 "toolTipShadowSpread": 0,
 "playbackBarHeadOpacity": 1,
 "progressBorderColor": "#000000",
 "toolTipBorderColor": "#767676",
 "width": "100%",
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "minHeight": 50,
 "toolTipOpacity": 1,
 "toolTipShadowBlurRadius": 3,
 "toolTipFontSize": "1.11vmin",
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipTextShadowColor": "#000000",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeadWidth": 6,
 "paddingRight": 0,
 "playbackBarHeight": 10,
 "minWidth": 100,
 "toolTipPaddingBottom": 4,
 "playbackBarRight": 0,
 "toolTipFontWeight": "normal",
 "playbackBarProgressBorderSize": 0,
 "toolTipTextShadowBlurRadius": 3,
 "playbackBarProgressBorderRadius": 0,
 "progressBarBorderRadius": 0,
 "progressBarBorderSize": 0,
 "playbackBarHeadShadowVerticalLength": 0,
 "toolTipShadowColor": "#333333",
 "height": "100%",
 "paddingLeft": 0,
 "playbackBarBorderRadius": 0,
 "playbackBarHeadBorderRadius": 0,
 "transitionMode": "blending",
 "playbackBarProgressBorderColor": "#000000",
 "playbackBarHeadBorderColor": "#000000",
 "shadow": false,
 "toolTipShadowOpacity": 1,
 "progressLeft": 0,
 "toolTipShadowHorizontalLength": 0,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "toolTipFontStyle": "normal",
 "playbackBarBorderSize": 0,
 "toolTipShadowVerticalLength": 0,
 "propagateClick": false,
 "playbackBarBackgroundOpacity": 1,
 "toolTipFontFamily": "Arial",
 "playbackBarHeadShadowHorizontalLength": 0,
 "vrPointerSelectionColor": "#FF6600",
 "toolTipTextShadowOpacity": 0,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "playbackBarHeadShadowColor": "#000000",
 "vrPointerSelectionTime": 2000,
 "progressRight": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "borderSize": 0,
 "progressBarBackgroundColorDirection": "vertical",
 "playbackBarHeadShadow": true,
 "progressBottom": 0,
 "toolTipBackgroundColor": "#F6F6F6",
 "toolTipFontColor": "#606060",
 "progressHeight": 10,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "displayTooltipInTouchScreens": true,
 "vrPointerColor": "#FFFFFF",
 "progressBarOpacity": 1,
 "playbackBarHeadShadowOpacity": 0.7,
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderSize": 0,
 "class": "ViewerArea",
 "toolTipBorderSize": 1,
 "toolTipPaddingRight": 6,
 "toolTipPaddingLeft": 6,
 "progressBorderRadius": 0,
 "paddingBottom": 0,
 "toolTipDisplayTime": 600,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "playbackBarLeft": 0,
 "paddingTop": 0,
 "toolTipBorderRadius": 3,
 "borderRadius": 0,
 "playbackBarHeadShadowBlurRadius": 3,
 "progressBackgroundColorRatios": [
  0
 ],
 "toolTipPaddingTop": 4,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "progressBarBorderColor": "#000000",
 "playbackBarHeadHeight": 15
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Arrow 05a"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 11.76,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_8A1F9B59_9FAD_15E0_41D1_17DFF177E99E",
   "pitch": -7.57,
   "yaw": -32.11,
   "distance": 100
  }
 ],
 "id": "overlay_8E42CF51_9FB5_0DE0_41C0_D94C91D72CA7",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_95C8483B_9FDB_13A0_41D9_A9354A49ED83, this.camera_AD64EA89_A002_C0A4_41CE_9CB96F59F1A9); this.mainPlayList.set('selectedIndex', 1); this.mainPlayList.set('selectedIndex', 4)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 11.76,
   "yaw": -32.11,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_95CAC973_9FDB_F5A0_41C2_2562D828735D_1_HS_0_0_0_map.gif",
      "width": 21,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -7.57
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Arrow 05a"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 11.75,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_8A1E4B59_9FAD_15E0_41E3_67A4B1E2305B",
   "pitch": -7.98,
   "yaw": -79.98,
   "distance": 100
  }
 ],
 "id": "overlay_8E281531_9FB6_FDA0_41C2_FCA392DA07C0",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_95CEAAFB_9FDB_14A1_41BB_DE23CE45C8B7, this.camera_AD553A7A_A002_C064_41E1_B3263D369C6A); this.mainPlayList.set('selectedIndex', 1); this.mainPlayList.set('selectedIndex', 2)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 11.75,
   "yaw": -79.98,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_95CAC973_9FDB_F5A0_41C2_2562D828735D_1_HS_1_0_0_map.gif",
      "width": 21,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -7.98
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Arrow 05a"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 11.58,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_8A1EFB5A_9FAD_15E3_41E1_A1D30E545755",
   "pitch": -12.48,
   "yaw": 98.39,
   "distance": 100
  }
 ],
 "id": "overlay_8DFA6D44_9FB7_0DE7_41C8_D58D31E53CAF",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 1); this.mainPlayList.set('selectedIndex', 7)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 11.58,
   "yaw": 98.39,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_95CAC973_9FDB_F5A0_41C2_2562D828735D_1_HS_2_0_0_map.gif",
      "width": 21,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -12.48
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Arrow 06a"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 11.96,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_BBDC0F76_9F57_0DA0_41C3_00BBA61E2173",
   "pitch": -6.75,
   "yaw": -81.53,
   "distance": 100
  }
 ],
 "id": "overlay_8294CF5C_9F55_0DE7_41DB_DDFF9EEF243F",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 7); this.mainPlayList.set('selectedIndex', 18)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 11.96,
   "yaw": -81.53,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_95CCD7D5_9FD5_7CE0_41E2_994AB6AB0398_0_HS_0_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -6.75
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Arrow 05a"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 11.07,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_85A43ACA_9F7A_F4E0_41D2_2439FB7647A1",
   "pitch": -21.05,
   "yaw": -156.89,
   "distance": 100
  }
 ],
 "id": "overlay_899B5331_9F77_35A1_41CF_BB13AF3ACCAA",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_95C97891_9FDB_7361_41D1_B7C6EA5B15A2, this.camera_AC0518C7_A002_C0AC_41D7_FDA238636995); this.mainPlayList.set('selectedIndex', 1); this.mainPlayList.set('selectedIndex', 8)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 11.07,
   "yaw": -156.89,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_95CE3FFF_9FDB_0CA0_41E1_9D3191535A8B_0_HS_0_0_0_map.gif",
      "width": 21,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -21.05
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Arrow 05a"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 11.72,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_BBD14F74_9F57_0DA0_41D5_987B31A42226",
   "pitch": -8.77,
   "yaw": -112.3,
   "distance": 50
  }
 ],
 "id": "overlay_8539AA71_9F75_37A0_4186_39441A16113A",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_95C3EA86_9FD5_1760_41E2_95D4D803E32C, this.camera_ABC5686E_A002_C07C_41B9_563B387C92DE); this.mainPlayList.set('selectedIndex', 1); this.mainPlayList.set('selectedIndex', 15)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 11.72,
   "yaw": -112.3,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_95CFA5B7_9FD5_3CA0_41D7_984D6157F458_0_HS_0_0_0_map.gif",
      "width": 41,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -8.77
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Arrow 05a"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 11.75,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_BBD1FF74_9F57_0DA0_41E2_2BD5E7BE147B",
   "pitch": -7.96,
   "yaw": -91.84,
   "distance": 100
  }
 ],
 "id": "overlay_853F07F0_9F75_FCBF_41D8_CC1B01680B52",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_95C3EA86_9FD5_1760_41E2_95D4D803E32C, this.camera_AC36C901_A002_C1A4_41E3_AEF56FC4D55C); this.mainPlayList.set('selectedIndex', 1); this.mainPlayList.set('selectedIndex', 15)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 11.75,
   "yaw": -91.84,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_95CF114F_9FD5_15E1_41E2_621FCC83952E_0_HS_0_0_0_map.gif",
      "width": 21,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -7.96
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Arrow 05a"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 11.6,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_BBDE7F75_9F57_0DA0_41D2_83D03E2145C8",
   "pitch": -12.05,
   "yaw": -7.57,
   "distance": 100
  }
 ],
 "id": "overlay_84F8271A_9F75_3D60_41E2_A3E6DDFBA216",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_84C1984D_9F6F_13E0_41E3_4A0E00713FF2, this.camera_AC2AB8F3_A002_C064_41B4_DDA58C2B388F); this.mainPlayList.set('selectedIndex', 1); this.mainPlayList.set('selectedIndex', 21)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 11.6,
   "yaw": -7.57,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_95CF114F_9FD5_15E1_41E2_621FCC83952E_0_HS_1_0_0_map.gif",
      "width": 21,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -12.05
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Arrow 05a"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 11.67,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_BBDEEF75_9F57_0DA0_41DC_0F7C08112CCD",
   "pitch": -10.41,
   "yaw": 91.84,
   "distance": 100
  }
 ],
 "id": "overlay_84A3BD92_9F75_0D63_41C2_ED7DE9813663",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 1); this.mainPlayList.set('selectedIndex', 18)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 11.67,
   "yaw": 91.84,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_95CF114F_9FD5_15E1_41E2_621FCC83952E_0_HS_2_0_0_map.gif",
      "width": 21,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -10.41
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Arrow 05a"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 11.53,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_BBD06F6E_9F57_0DA0_41A4_00FD8E6C162A",
   "pitch": -13.68,
   "yaw": -9.61,
   "distance": 100
  }
 ],
 "id": "overlay_86A14438_9F75_33A0_41D4_7DE523F7D188",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_95CFA5B7_9FD5_3CA0_41D7_984D6157F458, this.camera_AC884958_A002_C1A4_41C5_211AC6D916EC); this.mainPlayList.set('selectedIndex', 1); this.mainPlayList.set('selectedIndex', 16)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 11.53,
   "yaw": -9.61,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_95C3EA86_9FD5_1760_41E2_95D4D803E32C_0_HS_0_0_0_map.gif",
      "width": 21,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -13.68
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Arrow 05a"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 11.71,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_BBD09F6E_9F57_0DA0_41AB_4FB2E8975EF2",
   "pitch": -9.18,
   "yaw": 83.25,
   "distance": 100
  }
 ],
 "id": "overlay_864371A3_9F75_F4A0_41CC_82361FCD2C05",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 1); this.mainPlayList.set('selectedIndex', 17)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 11.71,
   "yaw": 83.25,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_95C3EA86_9FD5_1760_41E2_95D4D803E32C_0_HS_1_0_0_map.gif",
      "width": 21,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -9.18
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Arrow 05a"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 11.13,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_BBD10F6F_9F57_0DA0_41CF_A143D80C7426",
   "pitch": -20.23,
   "yaw": 168.34,
   "distance": 100
  }
 ],
 "id": "overlay_860CEFAB_9F75_0CA0_41DC_F0A59C829EA7",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_95CAEEFE_9FD5_0CA3_41D7_698F49443639, this.camera_AC794949_A002_C1A4_41E2_FA3D8F993D1B); this.mainPlayList.set('selectedIndex', 1); this.mainPlayList.set('selectedIndex', 14)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 11.13,
   "yaw": 168.34,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_95C3EA86_9FD5_1760_41E2_95D4D803E32C_0_HS_2_0_0_map.gif",
      "width": 21,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -20.23
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Arrow 05a"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 11.72,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_8A19DB57_9FAD_15E0_41DE_0D5DFF9F90CF",
   "pitch": -8.8,
   "yaw": -60.34,
   "distance": 50
  }
 ],
 "id": "overlay_8DEBC4DB_9FBF_FCE0_41D6_A413455BC4ED",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_95CEAAFB_9FDB_14A1_41BB_DE23CE45C8B7, this.camera_AD288A32_A002_C3E4_41C0_20B240E260D9); this.mainPlayList.set('selectedIndex', 2)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 11.72,
   "yaw": -60.34,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_95CE504E_9FDB_13E0_41D9_DFE773F2A116_1_HS_0_0_0_map.gif",
      "width": 24,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -8.8
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Arrow 05a"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 11.77,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_8A183B58_9FAD_15EF_41B8_4A356C6A25C8",
   "pitch": -7.16,
   "yaw": 142.57,
   "distance": 100
  }
 ],
 "id": "overlay_8F97FAA8_9FBF_74A0_41DE_CFA2714DECB1",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_94D2B3E3_9FDB_34A0_41DB_B63416D1D5CD, this.camera_AD383A4C_A002_C3A3_41E2_EA7367B8FDE9); this.mainPlayList.set('selectedIndex', 0)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 11.77,
   "yaw": 142.57,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_95CE504E_9FDB_13E0_41D9_DFE773F2A116_1_HS_2_0_0_map.gif",
      "width": 21,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -7.16
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Arrow 05a"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 11.75,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_BBD36F6D_9F57_0DA0_41E0_A61FD60F4AB6",
   "pitch": 8,
   "yaw": -6.75,
   "distance": 100
  }
 ],
 "id": "overlay_88A7C8EB_9F7D_14A0_41E3_B094726BA2D8",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_95C3EA86_9FD5_1760_41E2_95D4D803E32C, this.camera_ABEB689C_A002_C0DC_41E2_507C1DE0D96F); this.mainPlayList.set('selectedIndex', 1); this.mainPlayList.set('selectedIndex', 15)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 11.75,
   "yaw": -6.75,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_95CAEEFE_9FD5_0CA3_41D7_698F49443639_0_HS_0_0_0_map.gif",
      "width": 21,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 8
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Arrow 05a"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 11.42,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_BBD3AF6D_9F57_0DA0_41D7_D03DAC81BB93",
   "pitch": -15.73,
   "yaw": 70.57,
   "distance": 100
  }
 ],
 "id": "overlay_8847EBAD_9F7F_14A1_41D5_699D7DE4E771",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_95CE5B5B_9FDB_35E0_41AD_756AF7314A45, this.camera_ABF0B8AB_A002_C0E5_41D5_94304F0A3868); this.mainPlayList.set('selectedIndex', 1); this.mainPlayList.set('selectedIndex', 11)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 11.42,
   "yaw": 70.57,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_95CAEEFE_9FD5_0CA3_41D7_698F49443639_0_HS_1_0_0_map.gif",
      "width": 21,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -15.73
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Arrow 05a"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 11.84,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_BBD3DF6E_9F57_0DA0_41D2_9185E11ACAC5",
   "pitch": -3.87,
   "yaw": 169.98,
   "distance": 100
  }
 ],
 "id": "overlay_85E2AD45_9F7D_0DE0_41E0_918693EECD55",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 1); this.mainPlayList.set('selectedIndex', 12)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 11.84,
   "yaw": 169.98,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_95CAEEFE_9FD5_0CA3_41D7_698F49443639_0_HS_2_0_0_map.gif",
      "width": 21,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -3.87
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Arrow 05a"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 11.69,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_8A1D2B5A_9FAD_15E0_41C8_3A75A45C7C36",
   "pitch": -9.82,
   "yaw": -102.89,
   "distance": 100
  }
 ],
 "id": "overlay_8D37D861_9FAB_73A0_41DF_FFE71DE8E2DB",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_95CEAAFB_9FDB_14A1_41BB_DE23CE45C8B7, this.camera_ABD0487D_A002_C05C_41D5_1A61C6BB7A50); this.mainPlayList.set('selectedIndex', 1); this.mainPlayList.set('selectedIndex', 2)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 11.69,
   "yaw": -102.89,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_95CCB0E6_9FDB_14A0_4180_ADB9B7ACD63F_1_HS_0_0_0_map.gif",
      "width": 21,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -9.82
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Arrow 05a"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 11.82,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_8A18DB58_9FAD_15E0_41CF_BC2EF6746B10",
   "pitch": -5.11,
   "yaw": 119.66,
   "distance": 100
  }
 ],
 "id": "overlay_8EDE61B1_9FBD_14A0_41C5_CC622FF859EF",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_95CE504E_9FDB_13E0_41D9_DFE773F2A116, this.camera_ADD29AEF_A002_C07C_4192_079290075BDF); this.mainPlayList.set('selectedIndex', 1)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 11.82,
   "yaw": 119.66,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_95CEAAFB_9FDB_14A1_41BB_DE23CE45C8B7_1_HS_0_0_0_map.gif",
      "width": 34,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -5.11
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Arrow 05a"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 11.78,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_8A189B58_9FAD_15E0_41E1_3BD5CA16E3AC",
   "pitch": -6.75,
   "yaw": -40.7,
   "distance": 100
  }
 ],
 "id": "overlay_8EB8B2C1_9FBA_F4E0_41A0_B48B121CD770",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_95CE504E_9FDB_13E0_41D9_DFE773F2A116, this.camera_ABEB9B28_A002_C1E4_41DC_4A117DCA28B9); this.mainPlayList.set('selectedIndex', 1); this.mainPlayList.set('selectedIndex', 6)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 11.78,
   "yaw": -40.7,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_95CEAAFB_9FDB_14A1_41BB_DE23CE45C8B7_1_HS_1_0_0_map.gif",
      "width": 21,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -6.75
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Arrow 05a"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 11.82,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_8A1F3B59_9FAD_15E1_41E0_25DE45903A49",
   "pitch": -5.11,
   "yaw": -15.34,
   "distance": 100
  }
 ],
 "id": "overlay_8DC96DD1_9FBB_0CE0_41D8_87D217275DFD",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_95CE504E_9FDB_13E0_41D9_DFE773F2A116, this.camera_ABECEB37_A002_C1EC_41DF_ABF853117BE7); this.mainPlayList.set('selectedIndex', 1); this.mainPlayList.set('selectedIndex', 5)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 11.82,
   "yaw": -15.34,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_95CEAAFB_9FDB_14A1_41BB_DE23CE45C8B7_1_HS_2_0_0_map.gif",
      "width": 21,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -5.11
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Arrow 05a"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 11.76,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_8B3D1ED9_9F55_0CE1_41E2_CC969A7F6484",
   "pitch": -7.57,
   "yaw": -81.2,
   "distance": 100
  }
 ],
 "id": "overlay_8E8BA3A0_9FBB_14A0_41DE_78D61DEFE3DB",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_95CAC973_9FDB_F5A0_41C2_2562D828735D, this.camera_ABFA8B53_A002_C1A4_41B5_992C6107DDC2); this.mainPlayList.set('selectedIndex', 1); this.mainPlayList.set('selectedIndex', 3)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 11.76,
   "yaw": -81.2,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_95CEAAFB_9FDB_14A1_41BB_DE23CE45C8B7_0_HS_3_0_0_map.gif",
      "width": 34,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -7.57
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Arrow 05a"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 11.62,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_8967977A_9F5D_3DA3_41D2_9CAC841C57C8",
   "pitch": -11.64,
   "yaw": -157.3,
   "distance": 100
  }
 ],
 "id": "overlay_8BE16F2A_9F5B_0DA0_41D0_1E7FAC194524",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_95CAC973_9FDB_F5A0_41C2_2562D828735D, this.camera_AC5C692C_A002_C1FC_41DA_538FDF45841E); this.mainPlayList.set('selectedIndex', 1); this.mainPlayList.set('selectedIndex', 3)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 11.62,
   "yaw": -157.3,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_95CABCDA_9FDB_0CE3_41CA_DA649A270AE4_0_HS_0_0_0_map.gif",
      "width": 21,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -11.64
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Arrow 05a"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 11.85,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_8967277A_9F5D_3DA0_41C4_57E7369F6891",
   "pitch": -3.05,
   "yaw": -18.61,
   "distance": 100
  }
 ],
 "id": "overlay_8B498043_9F5D_13E0_41DA_AE746D734613",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 1); this.mainPlayList.set('selectedIndex', 20)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 11.85,
   "yaw": -18.61,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_95CABCDA_9FDB_0CE3_41CA_DA649A270AE4_0_HS_1_0_0_map.gif",
      "width": 21,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -3.05
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Arrow 05a"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 11.82,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_85A22ACA_9F7A_F4E0_41BD_7B23AE375A9C",
   "pitch": -4.68,
   "yaw": 125.8,
   "distance": 100
  }
 ],
 "id": "overlay_8A607EC9_9F6D_0CE0_41DF_B1B3DA30520E",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 1); this.mainPlayList.set('selectedIndex', 8)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 11.82,
   "yaw": 125.8,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_95CABCDA_9FDB_0CE3_41CA_DA649A270AE4_0_HS_2_0_0_map.gif",
      "width": 21,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -4.68
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Arrow 05a"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 11.44,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_85A27ACA_9F7A_F4E0_41DA_2D7F0AC7B4C2",
   "pitch": -3.05,
   "yaw": 82.23,
   "distance": 100
  }
 ],
 "id": "overlay_8A765755_9F6F_1DE1_41A1_ACA63CE9AA66",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 1); this.mainPlayList.set('selectedIndex', 7)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 11.44,
   "yaw": 82.23,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_95C97891_9FDB_7361_41D1_B7C6EA5B15A2_0_HS_0_0_0_map.gif",
      "width": 21,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -3.05
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Arrow 05a"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 11.74,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_85A2DACA_9F7A_F4E0_41B9_02BE29EA4D30",
   "pitch": -8.37,
   "yaw": -42.75,
   "distance": 100
  }
 ],
 "id": "overlay_89C6DDC2_9F6D_0CE3_41D1_773FFDA55992",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_95CE3FFF_9FDB_0CA0_41E1_9D3191535A8B, this.camera_AD0079E8_A002_C064_41E3_C8A7017923BF); this.mainPlayList.set('selectedIndex', 1); this.mainPlayList.set('selectedIndex', 10)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 11.74,
   "yaw": -42.75,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_95C97891_9FDB_7361_41D1_B7C6EA5B15A2_0_HS_1_0_0_map.gif",
      "width": 21,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -8.37
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Arrow 05a"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 12.61,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_85A52ACA_9F7A_F4E0_41DA_8F2FE2658482",
   "pitch": -5.91,
   "yaw": -163.02,
   "distance": 100
  }
 ],
 "id": "overlay_89A67728_9F6D_1DA0_41D0_9730D4D65EA3",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_95CE5B5B_9FDB_35E0_41AD_756AF7314A45, this.camera_AD0D7A00_A002_C3A4_41DE_BE47C9D9C73C); this.mainPlayList.set('selectedIndex', 1); this.mainPlayList.set('selectedIndex', 11)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 12.61,
   "yaw": -163.02,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_95C97891_9FDB_7361_41D1_B7C6EA5B15A2_0_HS_2_0_0_map.gif",
      "width": 21,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -5.91
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Arrow 05a"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 12.53,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_85A59ACA_9F7A_F4E0_41C3_449B8D8AA83E",
   "pitch": -8.77,
   "yaw": -6.75,
   "distance": 100
  }
 ],
 "id": "overlay_8A181DA5_9F75_0CA0_41DC_1D2B321EDF1F",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_95CB7498_9FDB_136F_41E0_0D45B7441953, this.camera_AD1FCA19_A002_C3A4_41D8_DE9D80A2B3F7); this.mainPlayList.set('selectedIndex', 1); this.mainPlayList.set('selectedIndex', 9)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 12.53,
   "yaw": -6.75,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_95C97891_9FDB_7361_41D1_B7C6EA5B15A2_0_HS_3_0_0_map.gif",
      "width": 34,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -8.77
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Arrow 05a"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 11.67,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_85A4BACA_9F7A_F4E0_41D7_E1110C9F3597",
   "pitch": -10.41,
   "yaw": 173.66,
   "distance": 100
  }
 ],
 "id": "overlay_88F3FE72_9F75_0FA1_41A3_0EFE77D3029C",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 1); this.mainPlayList.set('selectedIndex', 8)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 11.67,
   "yaw": 173.66,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_95CE5B5B_9FDB_35E0_41AD_756AF7314A45_0_HS_0_0_0_map.gif",
      "width": 21,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -10.41
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Arrow 05a"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 11.62,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_85A4FACA_9F7A_F4E0_41A8_8010F1322F17",
   "pitch": -11.64,
   "yaw": 45.2,
   "distance": 100
  }
 ],
 "id": "overlay_888DBA80_9F7B_3760_41C3_DCC382118E5D",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_95CAEEFE_9FD5_0CA3_41D7_698F49443639, this.camera_ACB40984_A002_C0A3_41B0_0649C9EAB4AF); this.mainPlayList.set('selectedIndex', 1); this.mainPlayList.set('selectedIndex', 14)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 11.62,
   "yaw": 45.2,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_95CE5B5B_9FDB_35E0_41AD_756AF7314A45_0_HS_1_0_0_map.gif",
      "width": 21,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -11.64
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Arrow 06a"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 11.86,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_BBDCCF76_9F57_0DA0_41C8_B96106FA73FB",
   "pitch": -10.02,
   "yaw": 102.56,
   "distance": 100
  }
 ],
 "id": "overlay_833A423C_9F6D_37A0_41C7_8F534632302B",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 7); this.mainPlayList.set('selectedIndex', 17)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 11.86,
   "yaw": 102.56,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_84C1984D_9F6F_13E0_41E3_4A0E00713FF2_1_HS_0_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -10.02
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Arrow 05a"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 11.65,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_8A1E8B5A_9FAD_15E3_41B0_84736EBD1199",
   "pitch": -10.84,
   "yaw": -148.3,
   "distance": 50
  }
 ],
 "id": "overlay_8C0931D9_9FB5_34E0_41C9_1CD36C868DB3",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_95CEAAFB_9FDB_14A1_41BB_DE23CE45C8B7, this.camera_AD761A97_A002_C0AC_41DD_805557F67148); this.mainPlayList.set('selectedIndex', 1); this.mainPlayList.set('selectedIndex', 2)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 11.65,
   "yaw": -148.3,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_95CE85AF_9FDB_3CA0_41D3_1C2ACDD27F9A_1_HS_0_0_0_map.gif",
      "width": 24,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -10.84
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Arrow 05a"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 11.64,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_BBD23F6C_9F57_0DA0_41D0_760069168141",
   "pitch": -11.23,
   "yaw": -173.66,
   "distance": 100
  }
 ],
 "id": "overlay_874E8C38_9F7D_33A0_41DE_457B410149FE",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_95CAEEFE_9FD5_0CA3_41D7_698F49443639, this.camera_ABFD3B62_A002_C064_41D4_671FA182F73F); this.mainPlayList.set('selectedIndex', 1); this.mainPlayList.set('selectedIndex', 14)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 11.64,
   "yaw": -173.66,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_95C54704_9FDB_1D60_41C0_05C63FA5C8FD_0_HS_0_0_0_map.gif",
      "width": 21,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -11.23
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Arrow 05a"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 11.85,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_BBD24F6D_9F57_0DA0_4198_97843E19E99D",
   "pitch": -2.23,
   "yaw": 9.61,
   "distance": 100
  }
 ],
 "id": "overlay_85A05FA2_9F7B_0CA0_41C3_6B40E5D4BD7E",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_95C1C33D_9FDA_F5A1_41CE_300BFF342ACD, this.camera_AC066B70_A002_C065_41DF_2B20803ECBDF); this.mainPlayList.set('selectedIndex', 1); this.mainPlayList.set('selectedIndex', 13)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 11.85,
   "yaw": 9.61,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_95C54704_9FDB_1D60_41C0_05C63FA5C8FD_0_HS_1_0_0_map.gif",
      "width": 21,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -2.23
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Arrow 05a"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 11.85,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_8A1B3B54_9FAD_15E0_41E0_ED83DB86D701",
   "pitch": -2.25,
   "yaw": -24.34,
   "distance": 100
  }
 ],
 "id": "overlay_8F82A3F3_9FBD_74A1_4193_1B36E32DF35C",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_95CE504E_9FDB_13E0_41D9_DFE773F2A116, this.camera_AC10E8D6_A002_C0AF_41E3_0F2C9DF8CAA3); this.mainPlayList.set('selectedIndex', 1)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 11.85,
   "yaw": -24.34,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_94D2B3E3_9FDB_34A0_41DB_B63416D1D5CD_1_HS_0_0_0_map.gif",
      "width": 21,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -2.25
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Arrow 05a"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 11.67,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_85A5DACA_9F7A_F4E0_4179_C4F28548AB1A",
   "pitch": -10.41,
   "yaw": -120.89,
   "distance": 50
  }
 ],
 "id": "overlay_89A73A2D_9F77_17A0_41DF_4A4D39748543",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_95C97891_9FDB_7361_41D1_B7C6EA5B15A2, this.camera_ADA04AC3_A002_C0A4_41B1_19EC5BCFD269); this.mainPlayList.set('selectedIndex', 1); this.mainPlayList.set('selectedIndex', 8)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 11.67,
   "yaw": -120.89,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_95CB7498_9FDB_136F_41E0_0D45B7441953_0_HS_0_0_0_map.gif",
      "width": 41,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -10.41
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Arrow 05a"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 11.74,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_BBD2EF6D_9F57_0DA0_41DA_4D34493FC805",
   "pitch": -8.37,
   "yaw": -174.07,
   "distance": 100
  }
 ],
 "id": "overlay_86C9E48B_9F7B_1360_41B3_3E664E3DDFBB",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_95C54704_9FDB_1D60_41C0_05C63FA5C8FD, this.camera_AD81DAA6_A002_C0EC_41C2_A9E4F63F7FDC); this.mainPlayList.set('selectedIndex', 1); this.mainPlayList.set('selectedIndex', 12)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 11.74,
   "yaw": -174.07,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_95C1C33D_9FDA_F5A1_41CE_300BFF342ACD_0_HS_0_0_0_map.gif",
      "width": 21,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -8.37
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Arrow 06a"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 11.82,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_BBDF1F75_9F57_0DA0_41B6_6383F9AF39B0",
   "pitch": -10.84,
   "yaw": -171.94,
   "distance": 100
  }
 ],
 "id": "overlay_82DF49FE_9F6B_14A0_41B7_F5B88F02D4BB",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 7); this.mainPlayList.set('selectedIndex', 17)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 11.82,
   "yaw": -171.94,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_95C81D0C_9FD5_0D60_41CD_3FBDFBA76D8F_0_HS_0_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -10.84
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Arrow 06a"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 11.87,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_BBDF8F76_9F57_0DA0_41D3_50E6CAA6671F",
   "pitch": -9.61,
   "yaw": -21.39,
   "distance": 100
  }
 ],
 "id": "overlay_82AF29E3_9F6B_14A1_41DD_42E3612CBB53",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_95CCD7D5_9FD5_7CE0_41E2_994AB6AB0398, this.camera_ACE139B0_A002_C0E3_41E3_71CFDA4285A1); this.mainPlayList.set('selectedIndex', 7); this.mainPlayList.set('selectedIndex', 19)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 11.87,
   "yaw": -21.39,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_95C81D0C_9FD5_0D60_41CD_3FBDFBA76D8F_0_HS_1_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -9.61
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Arrow 06a"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 12.03,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_8A1DAB5A_9FAD_15E0_41A1_ACF1110124F9",
   "pitch": 2.66,
   "yaw": 60.84,
   "distance": 100
  }
 ],
 "id": "overlay_90E6F50E_9FB5_1D60_41E1_F4D1FA643FC7",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_95CABCDA_9FDB_0CE3_41CA_DA649A270AE4, this.camera_ABFFA8B9_A002_C0E5_41DA_A3C196363D49); this.mainPlayList.set('selectedIndex', 7)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 12.03,
   "yaw": 60.84,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_95C82417_9FD5_1361_41DC_3FAAC71EAC58_1_HS_0_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 2.66
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Arrow 05a"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 11.79,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_8A11AF68_9F5B_0DA0_41C5_C0161146E92F",
   "pitch": -6.32,
   "yaw": -128.25,
   "distance": 100
  }
 ],
 "id": "overlay_8C1D4F28_9F55_0DA0_41D1_B7051D14B7EC",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_95CAC973_9FDB_F5A0_41C2_2562D828735D, this.camera_ACC60992_A002_C0A4_41CB_760ABBDACFAE); this.mainPlayList.set('selectedIndex', 1); this.mainPlayList.set('selectedIndex', 3)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "maps": [
  {
   "hfov": 11.79,
   "yaw": -128.25,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_95C8483B_9FDB_13A0_41D9_A9354A49ED83_0_HS_0_0_0_map.gif",
      "width": 21,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -6.32
  }
 ]
},
{
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_95CAC973_9FDB_F5A0_41C2_2562D828735D_1_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 540
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_8A1F9B59_9FAD_15E0_41D1_17DFF177E99E",
 "frameCount": 24,
 "frameDuration": 41
},
{
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_95CAC973_9FDB_F5A0_41C2_2562D828735D_1_HS_1_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 540
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_8A1E4B59_9FAD_15E0_41E3_67A4B1E2305B",
 "frameCount": 24,
 "frameDuration": 41
},
{
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_95CAC973_9FDB_F5A0_41C2_2562D828735D_1_HS_2_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 540
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_8A1EFB5A_9FAD_15E3_41E1_A1D30E545755",
 "frameCount": 24,
 "frameDuration": 41
},
{
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_95CCD7D5_9FD5_7CE0_41E2_994AB6AB0398_0_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_BBDC0F76_9F57_0DA0_41C3_00BBA61E2173",
 "frameCount": 24,
 "frameDuration": 41
},
{
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_95CE3FFF_9FDB_0CA0_41E1_9D3191535A8B_0_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 540
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_85A43ACA_9F7A_F4E0_41D2_2439FB7647A1",
 "frameCount": 24,
 "frameDuration": 41
},
{
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_95CFA5B7_9FD5_3CA0_41D7_984D6157F458_0_HS_0_0.png",
   "width": 720,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_BBD14F74_9F57_0DA0_41D5_987B31A42226",
 "frameCount": 24,
 "frameDuration": 41
},
{
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_95CF114F_9FD5_15E1_41E2_621FCC83952E_0_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 540
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_BBD1FF74_9F57_0DA0_41E2_2BD5E7BE147B",
 "frameCount": 24,
 "frameDuration": 41
},
{
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_95CF114F_9FD5_15E1_41E2_621FCC83952E_0_HS_1_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 540
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_BBDE7F75_9F57_0DA0_41D2_83D03E2145C8",
 "frameCount": 24,
 "frameDuration": 41
},
{
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_95CF114F_9FD5_15E1_41E2_621FCC83952E_0_HS_2_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 540
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_BBDEEF75_9F57_0DA0_41DC_0F7C08112CCD",
 "frameCount": 24,
 "frameDuration": 41
},
{
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_95C3EA86_9FD5_1760_41E2_95D4D803E32C_0_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 540
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_BBD06F6E_9F57_0DA0_41A4_00FD8E6C162A",
 "frameCount": 24,
 "frameDuration": 41
},
{
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_95C3EA86_9FD5_1760_41E2_95D4D803E32C_0_HS_1_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 540
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_BBD09F6E_9F57_0DA0_41AB_4FB2E8975EF2",
 "frameCount": 24,
 "frameDuration": 41
},
{
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_95C3EA86_9FD5_1760_41E2_95D4D803E32C_0_HS_2_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 540
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_BBD10F6F_9F57_0DA0_41CF_A143D80C7426",
 "frameCount": 24,
 "frameDuration": 41
},
{
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_95CE504E_9FDB_13E0_41D9_DFE773F2A116_1_HS_0_0.png",
   "width": 560,
   "class": "ImageResourceLevel",
   "height": 540
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_8A19DB57_9FAD_15E0_41DE_0D5DFF9F90CF",
 "frameCount": 24,
 "frameDuration": 41
},
{
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_95CE504E_9FDB_13E0_41D9_DFE773F2A116_1_HS_2_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 540
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_8A183B58_9FAD_15EF_41B8_4A356C6A25C8",
 "frameCount": 24,
 "frameDuration": 41
},
{
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_95CAEEFE_9FD5_0CA3_41D7_698F49443639_0_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 540
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_BBD36F6D_9F57_0DA0_41E0_A61FD60F4AB6",
 "frameCount": 24,
 "frameDuration": 41
},
{
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_95CAEEFE_9FD5_0CA3_41D7_698F49443639_0_HS_1_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 540
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_BBD3AF6D_9F57_0DA0_41D7_D03DAC81BB93",
 "frameCount": 24,
 "frameDuration": 41
},
{
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_95CAEEFE_9FD5_0CA3_41D7_698F49443639_0_HS_2_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 540
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_BBD3DF6E_9F57_0DA0_41D2_9185E11ACAC5",
 "frameCount": 24,
 "frameDuration": 41
},
{
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_95CCB0E6_9FDB_14A0_4180_ADB9B7ACD63F_1_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 540
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_8A1D2B5A_9FAD_15E0_41C8_3A75A45C7C36",
 "frameCount": 24,
 "frameDuration": 41
},
{
 "rowCount": 7,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_95CEAAFB_9FDB_14A1_41BB_DE23CE45C8B7_1_HS_0_0.png",
   "width": 600,
   "class": "ImageResourceLevel",
   "height": 385
  }
 ],
 "colCount": 5,
 "id": "AnimatedImageResource_8A18DB58_9FAD_15E0_41CF_BC2EF6746B10",
 "frameCount": 32,
 "frameDuration": 41
},
{
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_95CEAAFB_9FDB_14A1_41BB_DE23CE45C8B7_1_HS_1_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 540
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_8A189B58_9FAD_15E0_41E1_3BD5CA16E3AC",
 "frameCount": 24,
 "frameDuration": 41
},
{
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_95CEAAFB_9FDB_14A1_41BB_DE23CE45C8B7_1_HS_2_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 540
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_8A1F3B59_9FAD_15E1_41E0_25DE45903A49",
 "frameCount": 24,
 "frameDuration": 41
},
{
 "rowCount": 7,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_95CEAAFB_9FDB_14A1_41BB_DE23CE45C8B7_0_HS_3_0.png",
   "width": 600,
   "class": "ImageResourceLevel",
   "height": 385
  }
 ],
 "colCount": 5,
 "id": "AnimatedImageResource_8B3D1ED9_9F55_0CE1_41E2_CC969A7F6484",
 "frameCount": 32,
 "frameDuration": 41
},
{
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_95CABCDA_9FDB_0CE3_41CA_DA649A270AE4_0_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 540
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_8967977A_9F5D_3DA3_41D2_9CAC841C57C8",
 "frameCount": 24,
 "frameDuration": 41
},
{
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_95CABCDA_9FDB_0CE3_41CA_DA649A270AE4_0_HS_1_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 540
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_8967277A_9F5D_3DA0_41C4_57E7369F6891",
 "frameCount": 24,
 "frameDuration": 41
},
{
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_95CABCDA_9FDB_0CE3_41CA_DA649A270AE4_0_HS_2_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 540
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_85A22ACA_9F7A_F4E0_41BD_7B23AE375A9C",
 "frameCount": 24,
 "frameDuration": 41
},
{
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_95C97891_9FDB_7361_41D1_B7C6EA5B15A2_0_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 540
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_85A27ACA_9F7A_F4E0_41DA_2D7F0AC7B4C2",
 "frameCount": 24,
 "frameDuration": 41
},
{
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_95C97891_9FDB_7361_41D1_B7C6EA5B15A2_0_HS_1_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 540
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_85A2DACA_9F7A_F4E0_41B9_02BE29EA4D30",
 "frameCount": 24,
 "frameDuration": 41
},
{
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_95C97891_9FDB_7361_41D1_B7C6EA5B15A2_0_HS_2_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 540
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_85A52ACA_9F7A_F4E0_41DA_8F2FE2658482",
 "frameCount": 24,
 "frameDuration": 41
},
{
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_95C97891_9FDB_7361_41D1_B7C6EA5B15A2_0_HS_3_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 330
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_85A59ACA_9F7A_F4E0_41C3_449B8D8AA83E",
 "frameCount": 24,
 "frameDuration": 41
},
{
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_95CE5B5B_9FDB_35E0_41AD_756AF7314A45_0_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 540
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_85A4BACA_9F7A_F4E0_41D7_E1110C9F3597",
 "frameCount": 24,
 "frameDuration": 41
},
{
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_95CE5B5B_9FDB_35E0_41AD_756AF7314A45_0_HS_1_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 540
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_85A4FACA_9F7A_F4E0_41A8_8010F1322F17",
 "frameCount": 24,
 "frameDuration": 41
},
{
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_84C1984D_9F6F_13E0_41E3_4A0E00713FF2_1_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_BBDCCF76_9F57_0DA0_41C8_B96106FA73FB",
 "frameCount": 24,
 "frameDuration": 41
},
{
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_95CE85AF_9FDB_3CA0_41D3_1C2ACDD27F9A_1_HS_0_0.png",
   "width": 560,
   "class": "ImageResourceLevel",
   "height": 540
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_8A1E8B5A_9FAD_15E3_41B0_84736EBD1199",
 "frameCount": 24,
 "frameDuration": 41
},
{
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_95C54704_9FDB_1D60_41C0_05C63FA5C8FD_0_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 540
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_BBD23F6C_9F57_0DA0_41D0_760069168141",
 "frameCount": 24,
 "frameDuration": 41
},
{
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_95C54704_9FDB_1D60_41C0_05C63FA5C8FD_0_HS_1_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 540
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_BBD24F6D_9F57_0DA0_4198_97843E19E99D",
 "frameCount": 24,
 "frameDuration": 41
},
{
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_94D2B3E3_9FDB_34A0_41DB_B63416D1D5CD_1_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 540
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_8A1B3B54_9FAD_15E0_41E0_ED83DB86D701",
 "frameCount": 24,
 "frameDuration": 41
},
{
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_95CB7498_9FDB_136F_41E0_0D45B7441953_0_HS_0_0.png",
   "width": 720,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_85A5DACA_9F7A_F4E0_4179_C4F28548AB1A",
 "frameCount": 24,
 "frameDuration": 41
},
{
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_95C1C33D_9FDA_F5A1_41CE_300BFF342ACD_0_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 540
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_BBD2EF6D_9F57_0DA0_41DA_4D34493FC805",
 "frameCount": 24,
 "frameDuration": 41
},
{
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_95C81D0C_9FD5_0D60_41CD_3FBDFBA76D8F_0_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_BBDF1F75_9F57_0DA0_41B6_6383F9AF39B0",
 "frameCount": 24,
 "frameDuration": 41
},
{
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_95C81D0C_9FD5_0D60_41CD_3FBDFBA76D8F_0_HS_1_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_BBDF8F76_9F57_0DA0_41D3_50E6CAA6671F",
 "frameCount": 24,
 "frameDuration": 41
},
{
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_95C82417_9FD5_1361_41DC_3FAAC71EAC58_1_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_8A1DAB5A_9FAD_15E0_41A1_ACF1110124F9",
 "frameCount": 24,
 "frameDuration": 41
},
{
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_95C8483B_9FDB_13A0_41D9_A9354A49ED83_0_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 540
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_8A11AF68_9F5B_0DA0_41C5_C0161146E92F",
 "frameCount": 24,
 "frameDuration": 41
}],
 "width": "100%",
 "data": {
  "name": "Player512"
 }
};

    
    function HistoryData(playList) {
        this.playList = playList;
        this.list = [];
        this.pointer = -1;
    }

    HistoryData.prototype.add = function(index){
        if(this.pointer < this.list.length && this.list[this.pointer] == index) {
            return;
        }
        ++this.pointer;
        this.list.splice(this.pointer, this.list.length - this.pointer, index);
    };

    HistoryData.prototype.back = function(){
        if(!this.canBack()) return;
        this.playList.set('selectedIndex', this.list[--this.pointer]);
    };

    HistoryData.prototype.forward = function(){
        if(!this.canForward()) return;
        this.playList.set('selectedIndex', this.list[++this.pointer]);
    };

    HistoryData.prototype.canBack = function(){
        return this.pointer > 0;
    };

    HistoryData.prototype.canForward = function(){
        return this.pointer >= 0 && this.pointer < this.list.length-1;
    };
    //

    if(script.data == undefined)
        script.data = {};
    script.data["history"] = {};    //playListID -> HistoryData

    TDV.PlayerAPI.defineScript(script);
})();
