Template[getTemplate('postTitle')].helpers({
  postLink: function(){
    return !!this.url ? getOutgoingUrl(this.url) : "/posts/"+this._id;
  },
  postTarget: function() {
    return !!this.url ? '_blank' : '';
  }
});

Template[getTemplate('postTitle')].helpers({
  tagline: function(){
    var tagline = this.body;
    if (! tagline)
      return

    if (tagline.length >= 150)
      return tagline.substr(0, 149) + '...';

    return tagline;
  }
});