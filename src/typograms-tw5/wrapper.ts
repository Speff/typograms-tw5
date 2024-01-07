import { IChangedTiddlers } from 'tiddlywiki';
import { widget as Widget } from '$:/core/modules/widgets/widget.js';
import { create } from './typograms.js';

class TypogramsWidget extends Widget {
  initialise(parentNode: IParseTreeNode, options?: IWidgetInitialiseOptions) {
    // The initialization method of the base class needs to be called
    super.initialise(parentNode, options);
    // If there are no attributes for the widget, this below is not needed, but it is generally needed
    this.computeAttributes();
  }
execute() {
    this.source = this.getAttribute('text', undefined);
    this.zoom = this.getAttribute('zoom', undefined);
    this.grid = this.getAttribute('grid', undefined);
    this.width = this.getAttribute('width', undefined);
    this.height = this.getAttribute('height', undefined);
  }

  refresh(changedTiddlers: IChangedTiddlers) {
    return false;
  }

  render(parent: Node, nextSibling: Node) {
    this.parentDomNode = parent;
    this.execute();

    const svg = create(this);

    this.domNodes.push(parent.appendChild(svg));
  }
}

// The module variable name random exported here will be used as the name of the widget. Use <$typogram/> to call this widget.
// The widget's entry name in tiddlywiki, the source file, and the source.meta file name and the widget name can be different.
// For example, the widget entry name can be My-Widget, the source file and source.meta file names can be index.ts and index.ts.meta. The final widget name is random and the widget is called with <$random/>.
// If .meta is added to a script file it will be treated as an entry file.
exports.typogram = TypogramsWidget;