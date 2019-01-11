/* generated by Svelte vX.Y.Z */
import { SvelteComponent as SvelteComponent_1, append, createComment, createElement, createText, detachNode, flush, init, insert, noop, safe_not_equal } from "svelte/internal";

// (2:1) {#if a}
function create_if_block_4($$, ctx) {
	var p;

	return {
		c() {
			p = createElement("p");
			p.textContent = "a";
		},

		m(target, anchor) {
			insert(target, p, anchor);
		},

		d(detach) {
			if (detach) {
				detachNode(p);
			}
		}
	};
}

// (8:1) {#if b}
function create_if_block_3($$, ctx) {
	var p;

	return {
		c() {
			p = createElement("p");
			p.textContent = "b";
		},

		m(target, anchor) {
			insert(target, p, anchor);
		},

		d(detach) {
			if (detach) {
				detachNode(p);
			}
		}
	};
}

// (12:1) {#if c}
function create_if_block_2($$, ctx) {
	var p;

	return {
		c() {
			p = createElement("p");
			p.textContent = "c";
		},

		m(target, anchor) {
			insert(target, p, anchor);
		},

		d(detach) {
			if (detach) {
				detachNode(p);
			}
		}
	};
}

// (18:1) {#if d}
function create_if_block_1($$, ctx) {
	var p;

	return {
		c() {
			p = createElement("p");
			p.textContent = "d";
		},

		m(target, anchor) {
			insert(target, p, anchor);
		},

		d(detach) {
			if (detach) {
				detachNode(p);
			}
		}
	};
}

// (25:0) {#if e}
function create_if_block($$, ctx) {
	var p;

	return {
		c() {
			p = createElement("p");
			p.textContent = "e";
		},

		m(target, anchor) {
			insert(target, p, anchor);
		},

		d(detach) {
			if (detach) {
				detachNode(p);
			}
		}
	};
}

function create_fragment($$, ctx) {
	var div, text0, p0, text2, text3, text4, p1, text6, text7, if_block4_anchor, current;

	var if_block0 = (ctx.a) && create_if_block_4($$, ctx);

	var if_block1 = (ctx.b) && create_if_block_3($$, ctx);

	var if_block2 = (ctx.c) && create_if_block_2($$, ctx);

	var if_block3 = (ctx.d) && create_if_block_1($$, ctx);

	var if_block4 = (ctx.e) && create_if_block($$, ctx);

	return {
		c() {
			div = createElement("div");
			if (if_block0) if_block0.c();
			text0 = createText("\n\n\t");
			p0 = createElement("p");
			p0.textContent = "this can be used as an anchor";
			text2 = createText("\n\n\t");
			if (if_block1) if_block1.c();
			text3 = createText("\n\n\t");
			if (if_block2) if_block2.c();
			text4 = createText("\n\n\t");
			p1 = createElement("p");
			p1.textContent = "so can this";
			text6 = createText("\n\n\t");
			if (if_block3) if_block3.c();
			text7 = createText("\n\n");
			if (if_block4) if_block4.c();
			if_block4_anchor = createComment();
		},

		m(target, anchor) {
			insert(target, div, anchor);
			if (if_block0) if_block0.m(div, null);
			append(div, text0);
			append(div, p0);
			append(div, text2);
			if (if_block1) if_block1.m(div, null);
			append(div, text3);
			if (if_block2) if_block2.m(div, null);
			append(div, text4);
			append(div, p1);
			append(div, text6);
			if (if_block3) if_block3.m(div, null);
			insert(target, text7, anchor);
			if (if_block4) if_block4.m(target, anchor);
			insert(target, if_block4_anchor, anchor);
		},

		p(changed, ctx) {
			if (ctx.a) {
				if (!if_block0) {
					if_block0 = create_if_block_4($$, ctx);
					if_block0.c();
					if_block0.m(div, text0);
				}
			} else if (if_block0) {
				if_block0.d(1);
				if_block0 = null;
			}

			if (ctx.b) {
				if (!if_block1) {
					if_block1 = create_if_block_3($$, ctx);
					if_block1.c();
					if_block1.m(div, text3);
				}
			} else if (if_block1) {
				if_block1.d(1);
				if_block1 = null;
			}

			if (ctx.c) {
				if (!if_block2) {
					if_block2 = create_if_block_2($$, ctx);
					if_block2.c();
					if_block2.m(div, text4);
				}
			} else if (if_block2) {
				if_block2.d(1);
				if_block2 = null;
			}

			if (ctx.d) {
				if (!if_block3) {
					if_block3 = create_if_block_1($$, ctx);
					if_block3.c();
					if_block3.m(div, null);
				}
			} else if (if_block3) {
				if_block3.d(1);
				if_block3 = null;
			}

			if (ctx.e) {
				if (!if_block4) {
					if_block4 = create_if_block($$, ctx);
					if_block4.c();
					if_block4.m(if_block4_anchor.parentNode, if_block4_anchor);
				}
			} else if (if_block4) {
				if_block4.d(1);
				if_block4 = null;
			}
		},

		i: noop,
		o: noop,

		d(detach) {
			if (detach) {
				detachNode(div);
			}

			if (if_block0) if_block0.d();
			if (if_block1) if_block1.d();
			if (if_block2) if_block2.d();
			if (if_block3) if_block3.d();
			if (detach) {
				detachNode(text7);
			}

			if (if_block4) if_block4.d(detach);
			if (detach) {
				detachNode(if_block4_anchor);
			}
		}
	};
}

function instance($$self, $$props, $$invalidate) {
	let { a, b, c, d, e } = $$props;

	$$self.$set = $$props => {
		if ('a' in $$props) $$invalidate('a', a = $$props.a);
		if ('b' in $$props) $$invalidate('b', b = $$props.b);
		if ('c' in $$props) $$invalidate('c', c = $$props.c);
		if ('d' in $$props) $$invalidate('d', d = $$props.d);
		if ('e' in $$props) $$invalidate('e', e = $$props.e);
	};

	return { a, b, c, d, e };
}

class SvelteComponent extends SvelteComponent_1 {
	constructor(options) {
		super();
		init(this, options, instance, create_fragment, safe_not_equal);
	}

	get a() {
		return this.$$.ctx.a;
	}

	set a(a) {
		this.$set({ a });
		flush();
	}

	get b() {
		return this.$$.ctx.b;
	}

	set b(b) {
		this.$set({ b });
		flush();
	}

	get c() {
		return this.$$.ctx.c;
	}

	set c(c) {
		this.$set({ c });
		flush();
	}

	get d() {
		return this.$$.ctx.d;
	}

	set d(d) {
		this.$set({ d });
		flush();
	}

	get e() {
		return this.$$.ctx.e;
	}

	set e(e) {
		this.$set({ e });
		flush();
	}
}

export default SvelteComponent;