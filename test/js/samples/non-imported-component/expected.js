/* generated by Svelte vX.Y.Z */
import { SvelteComponent as SvelteComponent_1, createText, detachNode, identity, init, insert, mount_component, noop, safe_not_equal } from "svelte/internal";
import Imported from "Imported.html";

function create_fragment($$, ctx) {
	var text, current;

	var imported = new Imported({});

	var nonimported = new NonImported({});

	return {
		c() {
			imported.$$.fragment.c();
			text = createText("\n");
			nonimported.$$.fragment.c();
		},

		m(target, anchor) {
			mount_component(imported, target, anchor);
			insert(target, text, anchor);
			mount_component(nonimported, target, anchor);
		},

		p: noop,

		i() {
			if (current) return;
			imported.$$.fragment.i();

			nonimported.$$.fragment.i();

			current = true;
		},

		o() {
			if (imported) imported.$$.fragment.o();
			if (nonimported) nonimported.$$.fragment.o();
			current = false;
		},

		d(detach) {
			imported.$destroy(detach);

			if (detach) {
				detachNode(text);
			}

			nonimported.$destroy(detach);
		}
	};
}

class SvelteComponent extends SvelteComponent_1 {
	constructor(options) {
		super();
		init(this, options, identity, create_fragment, safe_not_equal);
	}
}

export default SvelteComponent;