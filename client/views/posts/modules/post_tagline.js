Template[getTemplate('postTagline')].helpers({
  tagline: function(){
  	var tagline = this.body;
    if (! tagline)
      return

    if (tagline.length >= 210)
      return tagline.substr(0, 209) + '...';

    return tagline;
  }
});