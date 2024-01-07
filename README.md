# typograms-tw5

## What is it

[[Demo page]](https://speff.github.io/typograms-tw5/)

Wrapper for Google's Typograms.js - a javascript library which can render ASCII diagrams into simple diagrams
<br> Take a look at [the Typogram page](https://google.github.io/typograms/) for more details and examples. The source for this plugin can be found [here](https://github.com/Speff/typograms-tw5)

## Calling it

The renderer can be invoked in one of two ways -

1. Via the `<$typogram/>` widget. Typical usage:

> ```
> <$typogram zoom=0.3 text="""
> [ASCII ART HERE]
> """/>
> ```
> Note: a `height` attribute can also be passed if needed. `zoom=0.3` is the default value and does not need to be provided

2. Transclusion via the newly added `text/vnd.tiddlywiki.typogram` content type

> A new tiddler can be created with the aforementioned content type which can then be transcluded to other tiddlers. A new dropdown item has been created which can be used to quickly select this type. *The text in the typogram tiddler should only contain code for the typogram itself*  
> Note: custom options such as `height` and `zoom` can't be passed if using this method

## Helper object

Diagramming a typogram is only possible when using a monospace font. A new toolbar button has been included with this plugin to toggle between variable/monospace font for the text editor

## Installation

Manually install the plugin by dragging the plugin in the [.io page](https://speff.github.io/typograms-tw5/) to your TiddlyWiki  
Then save and refresh your TiddlyWiki. 