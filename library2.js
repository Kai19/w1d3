var library = {
  tracks: { t01: { id: "t01",
                   name: "Code Monkey",
                   artist: "Jonathan Coulton",
                   album: "Thing a Week Three" },
            t02: { id: "t02",
                   name: "Model View Controller",
                   artist: "James Dempsey",
                   album: "WWDC 2003"},
            t03: { id: "t03",
                   name: "Four Thirty-Three",
                   artist: "John Cage",
                   album: "Woodstock 1952"}
          },
  playlists: { p01: { id: "p01",
                      name: "Coding Music",
                      tracks: ["t01", "t02"]
                    },
               p02: { id: "p02",
                      name: "Other Playlist",
                      tracks: ["t03"]
                    }
             },


  printPlaylists: function () {
    for(keys in this.playlists){
      var plId = this.playlists[keys].id
      var plName =  this.playlists[keys].name
      var count = 0
      this.playlists[keys].tracks.forEach(function(item){
          count++
      })
      console.log(plId + ": " + plName + " - " + count + " tracks");
    }
  },

  printTracks: function () {
    for(keys in this.tracks){
      var tId = this.tracks[keys].id
      var tName = this.tracks[keys].name
      var tArtist = this.tracks[keys].artist
      var tAlbum = this.tracks[keys].album
      console.log(tId + ": " + tName + " by " + tArtist + " (" + tAlbum + ")");
    }
  },

  printPlaylist:function (playlistId) {
    var plName =  this.playlists[playlistId].name
    var count = 0
    this.playlists[playlistId].tracks.forEach(function(item){
        count++
    })
    console.log(playlistId + ": " + plName + " - " + count + " tracks");


    tID = this.playlists[playlistId].tracks;
    for(var x = 0; x < tID.length; x++){
      var tName = this.tracks[tID[x]].name
      var tArtist = this.tracks[tID[x]].artist
      var tAlbum = this.tracks[tID[x]].album
      console.log(tID[x] + ": " + tName + " by " + tArtist + " (" + tAlbum + ")");
    }
  },

  addTrackToPlaylist: function (trackId, playlistId) {
    this.playlists[playlistId].tracks.push(trackId);
  },

  uid: function() {
    return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
  },

  addTrack:function (name, artist, album) {
    var uID = "t" + this.uid()
    this.tracks[uID] = {
      id: uID,
      name: name,
      artist: artist,
      album: album
    }
  },

  addTrack: function (name) {
    var uID = "p" + this.uid()
    this.playlists[uID] = {
      id: uID,
      name: name,
      tracks: [],
    }
  }
};
