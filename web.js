"use strict";
function require( path ){ return $node[ path ] };

var $node = $node || {}
void function( module ) { var exports = module.exports = this; function require( id ) { return $node[ id.replace( /^.\// , "../" ) ] }; 
;
"use strict";
Error.stackTraceLimit = 50;
var $;
(function ($) {
})($ || ($ = {}));
module.exports = $;
//mam.ts
;

$node[ "../mam.ts" ] = $node[ "../mam.ts" ] = module.exports }.call( {} , {} )
;
"use strict"

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	else for (var i = decorators.length - 1; i >= 0; i--) if ((d = decorators[i])) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var $ = ( typeof module === 'object' ) ? ( module['export'+'s'] = globalThis ) : globalThis
$.$$ = $

;
"use strict";
//hyoo/hyoo.ts
;
"use strict";
var $;
(function ($) {
    $.$mol_ambient_ref = Symbol('$mol_ambient_ref');
    function $mol_ambient(overrides) {
        return Object.setPrototypeOf(overrides, this || $);
    }
    $.$mol_ambient = $mol_ambient;
})($ || ($ = {}));
//mol/ambient/ambient.ts
;
"use strict";
var $;
(function ($) {
    const instances = new WeakSet();
    function $mol_delegate(proto, target) {
        const proxy = new Proxy(proto, {
            get: (_, field) => {
                const obj = target();
                let val = Reflect.get(obj, field);
                if (typeof val === 'function') {
                    val = val.bind(obj);
                }
                return val;
            },
            has: (_, field) => Reflect.has(target(), field),
            set: (_, field, value) => Reflect.set(target(), field, value),
            getOwnPropertyDescriptor: (_, field) => Reflect.getOwnPropertyDescriptor(target(), field),
            ownKeys: () => Reflect.ownKeys(target()),
            getPrototypeOf: () => Reflect.getPrototypeOf(target()),
            setPrototypeOf: (_, donor) => Reflect.setPrototypeOf(target(), donor),
            isExtensible: () => Reflect.isExtensible(target()),
            preventExtensions: () => Reflect.preventExtensions(target()),
            apply: (_, self, args) => Reflect.apply(target(), self, args),
            construct: (_, args, retarget) => Reflect.construct(target(), args, retarget),
            defineProperty: (_, field, descr) => Reflect.defineProperty(target(), field, descr),
            deleteProperty: (_, field) => Reflect.deleteProperty(target(), field),
        });
        instances.add(proxy);
        return proxy;
    }
    $.$mol_delegate = $mol_delegate;
    Reflect.defineProperty($mol_delegate, Symbol.hasInstance, {
        value: (obj) => instances.has(obj),
    });
})($ || ($ = {}));
//mol/delegate/delegate.ts
;
"use strict";
var $;
(function ($) {
    $.$mol_owning_map = new WeakMap();
    function $mol_owning_allow(having) {
        try {
            if (!having)
                return false;
            if (typeof having !== 'object')
                return false;
            if (having instanceof $mol_delegate)
                return false;
            if (typeof having['destructor'] !== 'function')
                return false;
            return true;
        }
        catch {
            return false;
        }
    }
    $.$mol_owning_allow = $mol_owning_allow;
    function $mol_owning_get(having, Owner) {
        if (!$mol_owning_allow(having))
            return null;
        while (true) {
            const owner = $.$mol_owning_map.get(having);
            if (!owner)
                return owner;
            if (!Owner)
                return owner;
            if (owner instanceof Owner)
                return owner;
            having = owner;
        }
    }
    $.$mol_owning_get = $mol_owning_get;
    function $mol_owning_check(owner, having) {
        if (!$mol_owning_allow(having))
            return false;
        if ($.$mol_owning_map.get(having) !== owner)
            return false;
        return true;
    }
    $.$mol_owning_check = $mol_owning_check;
    function $mol_owning_catch(owner, having) {
        if (!$mol_owning_allow(having))
            return false;
        if ($.$mol_owning_map.get(having))
            return false;
        $.$mol_owning_map.set(having, owner);
        return true;
    }
    $.$mol_owning_catch = $mol_owning_catch;
})($ || ($ = {}));
//mol/owning/owning.ts
;
"use strict";
var $;
(function ($) {
    function $mol_fail(error) {
        throw error;
    }
    $.$mol_fail = $mol_fail;
})($ || ($ = {}));
//mol/fail/fail.ts
;
"use strict";
var $;
(function ($) {
    function $mol_fail_hidden(error) {
        throw error;
    }
    $.$mol_fail_hidden = $mol_fail_hidden;
})($ || ($ = {}));
//mol/fail/hidden/hidden.ts
;
"use strict";
//mol/type/writable/writable.ts
;
"use strict";
var $;
(function ($) {
    class $mol_object2 {
        static $ = $;
        [Symbol.toStringTag];
        [$mol_ambient_ref] = null;
        get $() {
            if (this[$mol_ambient_ref])
                return this[$mol_ambient_ref];
            const owner = $mol_owning_get(this);
            return this[$mol_ambient_ref] = owner?.$ || $mol_object2.$;
        }
        set $(next) {
            if (this[$mol_ambient_ref])
                $mol_fail_hidden(new Error('Context already defined'));
            this[$mol_ambient_ref] = next;
        }
        static create(init) {
            const obj = new this;
            if (init)
                init(obj);
            return obj;
        }
        static [Symbol.toPrimitive]() {
            return this.toString();
        }
        static toString() {
            if (Symbol.toStringTag in this)
                return this[Symbol.toStringTag];
            return this.name;
        }
        destructor() { }
        toString() {
            return this[Symbol.toStringTag] || this.constructor.name + '()';
        }
        toJSON() {
            return this.toString();
        }
    }
    $.$mol_object2 = $mol_object2;
})($ || ($ = {}));
//mol/object2/object2.ts
;
"use strict";
var $;
(function ($) {
    class $mol_after_tick extends $mol_object2 {
        task;
        promise;
        cancelled = false;
        constructor(task) {
            super();
            this.task = task;
            this.promise = Promise.resolve().then(() => {
                if (this.cancelled)
                    return;
                task();
            });
        }
        destructor() {
            this.cancelled = true;
        }
    }
    $.$mol_after_tick = $mol_after_tick;
})($ || ($ = {}));
//mol/after/tick/tick.ts
;
"use strict";
var $;
(function ($) {
})($ || ($ = {}));
//mol/dom/context/context.ts
;
"use strict";
var $;
(function ($) {
    $.$mol_dom_context = self;
})($ || ($ = {}));
//mol/dom/context/context.web.ts
;
"use strict";
var $;
(function ($) {
    let all = [];
    let el = null;
    let timer = null;
    function $mol_style_attach(id, text) {
        all.push(`/* ${id} */\n\n${text}`);
        if (timer)
            return el;
        const doc = $mol_dom_context.document;
        if (!doc)
            return null;
        el = doc.createElement('style');
        el.id = `$mol_style_attach`;
        doc.head.appendChild(el);
        timer = new $mol_after_tick(() => {
            el.innerHTML = '\n' + all.join('\n\n');
            all = [];
            el = null;
            timer = null;
        });
        return el;
    }
    $.$mol_style_attach = $mol_style_attach;
})($ || ($ = {}));
//mol/style/attach/attach.ts
;
"use strict";
var $;
(function ($_1) {
    let $$;
    (function ($$) {
        let $;
    })($$ = $_1.$$ || ($_1.$$ = {}));
    $_1.$mol_object_field = Symbol('$mol_object_field');
    class $mol_object extends $mol_object2 {
        static make(config) {
            return super.create(obj => {
                for (let key in config)
                    obj[key] = config[key];
            });
        }
    }
    $_1.$mol_object = $mol_object;
})($ || ($ = {}));
//mol/object/object.ts
;
"use strict";
var $;
(function ($) {
    let $mol_wire_cursor;
    (function ($mol_wire_cursor) {
        $mol_wire_cursor[$mol_wire_cursor["stale"] = -1] = "stale";
        $mol_wire_cursor[$mol_wire_cursor["doubt"] = -2] = "doubt";
        $mol_wire_cursor[$mol_wire_cursor["fresh"] = -3] = "fresh";
        $mol_wire_cursor[$mol_wire_cursor["final"] = -4] = "final";
    })($mol_wire_cursor = $.$mol_wire_cursor || ($.$mol_wire_cursor = {}));
})($ || ($ = {}));
//mol/wire/cursor/cursor.ts
;
"use strict";
var $;
(function ($) {
    class $mol_wire_pub extends Object {
        data = [];
        static get [Symbol.species]() {
            return Array;
        }
        sub_from = 0;
        get sub_list() {
            const res = [];
            for (let i = this.sub_from; i < this.data.length; i += 2) {
                res.push(this.data[i]);
            }
            return res;
        }
        get sub_empty() {
            return this.sub_from === this.data.length;
        }
        sub_on(sub, pub_pos) {
            const pos = this.data.length;
            this.data.push(sub, pub_pos);
            return pos;
        }
        sub_off(sub_pos) {
            if (!(sub_pos < this.data.length)) {
                $mol_fail(new Error(`Wrong pos ${sub_pos}`));
            }
            const end = this.data.length - 2;
            if (sub_pos !== end) {
                this.peer_move(end, sub_pos);
            }
            this.data.pop();
            this.data.pop();
            if (this.data.length === this.sub_from)
                this.reap();
        }
        reap() { }
        promote() {
            $mol_wire_auto()?.track_next(this);
        }
        fresh() { }
        complete() { }
        emit(quant = $mol_wire_cursor.stale) {
            for (let i = this.sub_from; i < this.data.length; i += 2) {
                ;
                this.data[i].absorb(quant);
            }
        }
        peer_move(from_pos, to_pos) {
            const peer = this.data[from_pos];
            const self_pos = this.data[from_pos + 1];
            this.data[to_pos] = peer;
            this.data[to_pos + 1] = self_pos;
            peer.peer_repos(self_pos, to_pos);
        }
        peer_repos(peer_pos, self_pos) {
            this.data[peer_pos + 1] = self_pos;
        }
    }
    $.$mol_wire_pub = $mol_wire_pub;
})($ || ($ = {}));
//mol/wire/pub/pub.ts
;
"use strict";
//mol/wire/sub/sub.ts
;
"use strict";
var $;
(function ($) {
    let auto = null;
    function $mol_wire_auto(next = auto) {
        return auto = next;
    }
    $.$mol_wire_auto = $mol_wire_auto;
    $.$mol_wire_affected = [];
})($ || ($ = {}));
//mol/wire/wire.ts
;
"use strict";
var $;
(function ($) {
    $['devtoolsFormatters'] ||= [];
    function $mol_dev_format_register(config) {
        $['devtoolsFormatters'].push(config);
    }
    $.$mol_dev_format_register = $mol_dev_format_register;
    $.$mol_dev_format_head = Symbol('$mol_dev_format_head');
    $.$mol_dev_format_body = Symbol('$mol_dev_format_body');
    $mol_dev_format_register({
        header: (val, config = false) => {
            if (config)
                return null;
            if (!val)
                return null;
            if ($.$mol_dev_format_head in val) {
                return val[$.$mol_dev_format_head]();
            }
            if (typeof val === 'function') {
                return $mol_dev_format_native(val);
            }
            return null;
        },
        hasBody: val => val[$.$mol_dev_format_body],
        body: val => val[$.$mol_dev_format_body](),
    });
    function $mol_dev_format_native(obj) {
        if (typeof obj === 'undefined')
            return $.$mol_dev_format_shade('undefined');
        if (typeof obj !== 'object' && typeof obj !== 'function')
            return obj;
        return [
            'object',
            {
                object: obj,
                config: true,
            },
        ];
    }
    $.$mol_dev_format_native = $mol_dev_format_native;
    function $mol_dev_format_auto(obj) {
        if (obj == null)
            return $.$mol_dev_format_shade(String(obj));
        if (typeof obj === 'object' && $.$mol_dev_format_head in obj) {
            return obj[$.$mol_dev_format_head]();
        }
        return [
            'object',
            {
                object: obj,
                config: false,
            },
        ];
    }
    $.$mol_dev_format_auto = $mol_dev_format_auto;
    function $mol_dev_format_element(element, style, ...content) {
        const styles = [];
        for (let key in style)
            styles.push(`${key} : ${style[key]}`);
        return [
            element,
            {
                style: styles.join(' ; '),
            },
            ...content,
        ];
    }
    $.$mol_dev_format_element = $mol_dev_format_element;
    function $mol_dev_format_span(style, ...content) {
        return $mol_dev_format_element('span', {
            'vertical-align': '8%',
            ...style,
        }, ...content);
    }
    $.$mol_dev_format_span = $mol_dev_format_span;
    $.$mol_dev_format_div = $mol_dev_format_element.bind(null, 'div');
    $.$mol_dev_format_ol = $mol_dev_format_element.bind(null, 'ol');
    $.$mol_dev_format_li = $mol_dev_format_element.bind(null, 'li');
    $.$mol_dev_format_table = $mol_dev_format_element.bind(null, 'table');
    $.$mol_dev_format_tr = $mol_dev_format_element.bind(null, 'tr');
    $.$mol_dev_format_td = $mol_dev_format_element.bind(null, 'td');
    $.$mol_dev_format_accent = $mol_dev_format_span.bind(null, {
        'color': 'magenta',
    });
    $.$mol_dev_format_strong = $mol_dev_format_span.bind(null, {
        'font-weight': 'bold',
    });
    $.$mol_dev_format_string = $mol_dev_format_span.bind(null, {
        'color': 'green',
    });
    $.$mol_dev_format_shade = $mol_dev_format_span.bind(null, {
        'color': 'gray',
    });
    $.$mol_dev_format_indent = $.$mol_dev_format_div.bind(null, {
        'margin-left': '13px'
    });
})($ || ($ = {}));
//mol/dev/format/format.ts
;
"use strict";
var $;
(function ($) {
    class $mol_wire_pub_sub extends $mol_wire_pub {
        pub_from = 0;
        cursor = $mol_wire_cursor.stale;
        get pub_list() {
            const res = [];
            const max = this.cursor >= 0 ? this.cursor : this.sub_from;
            for (let i = this.pub_from; i < max; i += 2) {
                if (this.data[i])
                    res.push(this.data[i]);
            }
            return res;
        }
        track_on() {
            this.cursor = this.pub_from;
            const sub = $mol_wire_auto();
            $mol_wire_auto(this);
            return sub;
        }
        promote() {
            if (this.cursor >= this.pub_from) {
                $mol_fail(new Error('Circular subscription'));
            }
            super.promote();
        }
        track_next(pub) {
            if (this.cursor < 0)
                $mol_fail(new Error('Promo to non begun sub'));
            if (this.cursor < this.sub_from) {
                const next = this.data[this.cursor];
                if (pub === undefined)
                    return next ?? null;
                if (next === pub) {
                    this.cursor += 2;
                    return next;
                }
                if (next) {
                    if (this.sub_from < this.data.length) {
                        this.peer_move(this.sub_from, this.data.length);
                    }
                    this.peer_move(this.cursor, this.sub_from);
                    this.sub_from += 2;
                }
            }
            else {
                if (pub === undefined)
                    return null;
                if (this.sub_from < this.data.length) {
                    this.peer_move(this.sub_from, this.data.length);
                }
                this.sub_from += 2;
            }
            this.data[this.cursor] = pub;
            this.data[this.cursor + 1] = pub.sub_on(this, this.cursor);
            this.cursor += 2;
            return pub;
        }
        track_off(sub) {
            $mol_wire_auto(sub);
            if (this.cursor < 0) {
                $mol_fail(new Error('End of non begun sub'));
            }
            for (let cursor = this.pub_from; cursor < this.cursor; cursor += 2) {
                const pub = this.data[cursor];
                pub.fresh();
            }
            this.cursor = $mol_wire_cursor.fresh;
        }
        pub_off(sub_pos) {
            this.data[sub_pos] = undefined;
            this.data[sub_pos + 1] = undefined;
        }
        destructor() {
            for (let cursor = this.data.length - 2; cursor >= this.sub_from; cursor -= 2) {
                const sub = this.data[cursor];
                const pos = this.data[cursor + 1];
                sub.pub_off(pos);
                this.data.pop();
                this.data.pop();
            }
            this.cursor = this.pub_from;
            this.track_cut();
            this.cursor = $mol_wire_cursor.final;
        }
        track_cut() {
            if (this.cursor < this.pub_from) {
                $mol_fail(new Error('Cut of non begun sub'));
            }
            let tail = 0;
            for (let cursor = this.cursor; cursor < this.sub_from; cursor += 2) {
                const pub = this.data[cursor];
                pub?.sub_off(this.data[cursor + 1]);
                if (this.sub_from < this.data.length) {
                    this.peer_move(this.data.length - 2, cursor);
                    this.data.pop();
                    this.data.pop();
                }
                else {
                    ++tail;
                }
            }
            for (; tail; --tail) {
                this.data.pop();
                this.data.pop();
            }
            this.sub_from = this.cursor;
        }
        complete() { }
        complete_pubs() {
            const limit = this.cursor < 0 ? this.sub_from : this.cursor;
            for (let cursor = this.pub_from; cursor < limit; cursor += 2) {
                const pub = this.data[cursor];
                pub?.complete();
            }
        }
        absorb(quant = $mol_wire_cursor.stale) {
            if (this.cursor === $mol_wire_cursor.final)
                return;
            if (this.cursor >= quant)
                return;
            this.cursor = quant;
            this.emit($mol_wire_cursor.doubt);
        }
        [$mol_dev_format_head]() {
            return $mol_dev_format_native(this);
        }
        get pub_empty() {
            return this.sub_from === this.pub_from;
        }
    }
    $.$mol_wire_pub_sub = $mol_wire_pub_sub;
})($ || ($ = {}));
//mol/wire/pub/sub/sub.ts
;
"use strict";
var $;
(function ($) {
    class $mol_after_frame extends $mol_object2 {
        task;
        static _promise = null;
        static get promise() {
            if (this._promise)
                return this._promise;
            return this._promise = new Promise(done => {
                const complete = () => {
                    this._promise = null;
                    done();
                };
                if (typeof requestAnimationFrame === 'function') {
                    requestAnimationFrame(complete);
                }
                else {
                    setTimeout(complete, 16);
                }
            });
        }
        cancelled = false;
        promise;
        constructor(task) {
            super();
            this.task = task;
            this.promise = $mol_after_frame.promise.then(() => {
                if (this.cancelled)
                    return;
                task();
            });
        }
        destructor() {
            this.cancelled = true;
        }
    }
    $.$mol_after_frame = $mol_after_frame;
})($ || ($ = {}));
//mol/after/frame/frame.web.ts
;
"use strict";
var $;
(function ($) {
    const handled = new WeakSet();
    class $mol_wire_fiber extends $mol_wire_pub_sub {
        task;
        host;
        static warm = true;
        static planning = new Set();
        static reaping = new Set();
        static plan_task = null;
        static plan() {
            if (this.plan_task)
                return;
            this.plan_task = new $mol_after_frame(() => {
                try {
                    this.sync();
                }
                finally {
                    $mol_wire_fiber.plan_task = null;
                }
            });
        }
        static sync() {
            while (this.planning.size) {
                for (const fiber of this.planning) {
                    this.planning.delete(fiber);
                    if (fiber.cursor >= 0)
                        continue;
                    if (fiber.cursor === $mol_wire_cursor.final)
                        continue;
                    fiber.fresh();
                }
            }
            while (this.reaping.size) {
                const fibers = this.reaping;
                this.reaping = new Set;
                for (const fiber of fibers) {
                    if (!fiber.sub_empty)
                        continue;
                    fiber.destructor();
                }
            }
        }
        [Symbol.toStringTag];
        cache = undefined;
        get args() {
            return this.data.slice(0, this.pub_from);
        }
        result() {
            if (this.cache instanceof Promise)
                return;
            if (this.cache instanceof Error)
                return;
            return this.cache;
        }
        field() {
            return this.task.name + '()';
        }
        constructor(id, task, host, args) {
            super();
            this.task = task;
            this.host = host;
            if (args)
                this.data.push(...args);
            this.pub_from = this.sub_from = args?.length ?? 0;
            this[Symbol.toStringTag] = id;
        }
        plan() {
            $mol_wire_fiber.planning.add(this);
            $mol_wire_fiber.plan();
        }
        reap() {
            $mol_wire_fiber.reaping.add(this);
            $mol_wire_fiber.plan();
        }
        toString() {
            return this[Symbol.toStringTag];
        }
        toJSON() {
            return this[Symbol.toStringTag];
        }
        [$mol_dev_format_head]() {
            const cursor = {
                [$mol_wire_cursor.stale]: '🔴',
                [$mol_wire_cursor.doubt]: '🟡',
                [$mol_wire_cursor.fresh]: '🟢',
                [$mol_wire_cursor.final]: '🔵',
            }[this.cursor] ?? this.cursor.toString();
            return $mol_dev_format_div({}, $mol_dev_format_native(this), $mol_dev_format_shade(cursor + ' '), $mol_dev_format_auto(this.cache));
        }
        get $() {
            return (this.host ?? this.task)['$'];
        }
        emit(quant = $mol_wire_cursor.stale) {
            if (this.sub_empty)
                this.plan();
            else
                super.emit(quant);
        }
        fresh() {
            if (this.cursor === $mol_wire_cursor.fresh)
                return;
            if (this.cursor === $mol_wire_cursor.final)
                return;
            check: if (this.cursor === $mol_wire_cursor.doubt) {
                for (let i = this.pub_from; i < this.sub_from; i += 2) {
                    ;
                    this.data[i]?.fresh();
                    if (this.cursor !== $mol_wire_cursor.doubt)
                        break check;
                }
                this.cursor = $mol_wire_cursor.fresh;
                return;
            }
            const bu = this.track_on();
            let result;
            try {
                switch (this.pub_from) {
                    case 0:
                        result = this.task.call(this.host);
                        break;
                    case 1:
                        result = this.task.call(this.host, this.data[0]);
                        break;
                    default:
                        result = this.task.call(this.host, ...this.args);
                        break;
                }
                if (result instanceof Promise) {
                    const put = (res) => {
                        if (this.cache === result)
                            this.put(res);
                        return res;
                    };
                    result = Object.assign(result.then(put, put), {
                        destructor: result['destructor'] ?? (() => { })
                    });
                    handled.add(result);
                }
            }
            catch (error) {
                if (error instanceof Error || error instanceof Promise) {
                    result = error;
                }
                else {
                    result = new Error(String(error), { cause: error });
                }
                if (result instanceof Promise && !handled.has(result)) {
                    result = Object.assign(result.finally(() => {
                        if (this.cache === result)
                            this.absorb();
                    }), {
                        destructor: result['destructor'] ?? (() => { })
                    });
                    handled.add(result);
                }
            }
            if (!(result instanceof Promise)) {
                this.track_cut();
            }
            this.track_off(bu);
            this.put(result);
        }
        refresh() {
            this.cursor = $mol_wire_cursor.stale;
            this.fresh();
        }
        sync() {
            if (!$mol_wire_fiber.warm) {
                return this.result();
            }
            this.promote();
            this.fresh();
            if (this.cache instanceof Error) {
                return $mol_fail_hidden(this.cache);
            }
            if (this.cache instanceof Promise) {
                return $mol_fail_hidden(this.cache);
            }
            return this.cache;
        }
        async async() {
            while (true) {
                this.fresh();
                if (this.cache instanceof Error) {
                    $mol_fail_hidden(this.cache);
                }
                if (!(this.cache instanceof Promise))
                    return this.cache;
                await this.cache;
                if (this.cursor === $mol_wire_cursor.final) {
                    await new Promise(() => { });
                }
            }
        }
    }
    $.$mol_wire_fiber = $mol_wire_fiber;
})($ || ($ = {}));
//mol/wire/fiber/fiber.ts
;
"use strict";
var $;
(function ($) {
    const named = new WeakSet();
    function $mol_func_name(func) {
        let name = func.name;
        if (name?.length > 1)
            return name;
        if (named.has(func))
            return name;
        for (let key in this) {
            try {
                if (this[key] !== func)
                    continue;
                name = key;
                Object.defineProperty(func, 'name', { value: name });
                break;
            }
            catch { }
        }
        named.add(func);
        return name;
    }
    $.$mol_func_name = $mol_func_name;
    function $mol_func_name_from(target, source) {
        Object.defineProperty(target, 'name', { value: source.name });
        return target;
    }
    $.$mol_func_name_from = $mol_func_name_from;
})($ || ($ = {}));
//mol/func/name/name.ts
;
"use strict";
var $;
(function ($) {
    function $mol_guid(length = 8, exists = () => false) {
        for (;;) {
            let id = Math.random().toString(36).substring(2, length + 2).toUpperCase();
            if (exists(id))
                continue;
            return id;
        }
    }
    $.$mol_guid = $mol_guid;
})($ || ($ = {}));
//mol/guid/guid.ts
;
"use strict";
var $;
(function ($) {
    $.$mol_key_store = new WeakMap();
    function $mol_key(value) {
        if (!value)
            return JSON.stringify(value);
        if (typeof value !== 'object' && typeof value !== 'function')
            return JSON.stringify(value);
        return JSON.stringify(value, (field, value) => {
            if (!value)
                return value;
            if (typeof value !== 'object' && typeof value !== 'function')
                return value;
            if (Array.isArray(value))
                return value;
            const proto = Reflect.getPrototypeOf(value);
            if (!proto)
                return value;
            if (Reflect.getPrototypeOf(proto) === null)
                return value;
            if ('toJSON' in value)
                return value;
            if (value instanceof RegExp)
                return value.toString();
            let key = $.$mol_key_store.get(value);
            if (key)
                return key;
            key = $mol_guid();
            $.$mol_key_store.set(value, key);
            return key;
        });
    }
    $.$mol_key = $mol_key;
})($ || ($ = {}));
//mol/key/key.ts
;
"use strict";
var $;
(function ($) {
    $.$mol_compare_deep_cache = new WeakMap();
    function $mol_compare_deep(left, right) {
        if (Object.is(left, right))
            return true;
        if (left === null)
            return false;
        if (right === null)
            return false;
        if (typeof left !== 'object')
            return false;
        if (typeof right !== 'object')
            return false;
        const left_proto = Reflect.getPrototypeOf(left);
        const right_proto = Reflect.getPrototypeOf(right);
        if (left_proto !== right_proto)
            return false;
        if (left instanceof Boolean)
            return Object.is(left.valueOf(), right['valueOf']());
        if (left instanceof Number)
            return Object.is(left.valueOf(), right['valueOf']());
        if (left instanceof String)
            return Object.is(left.valueOf(), right['valueOf']());
        if (left instanceof Date)
            return Object.is(left.valueOf(), right['valueOf']());
        if (left instanceof RegExp)
            return left.source === right.source && left.flags === right.flags;
        if (left instanceof Error)
            return left.message === right.message && left.stack === right.stack;
        let left_cache = $.$mol_compare_deep_cache.get(left);
        if (left_cache) {
            const right_cache = left_cache.get(right);
            if (typeof right_cache === 'boolean')
                return right_cache;
        }
        else {
            left_cache = new WeakMap([[right, true]]);
            $.$mol_compare_deep_cache.set(left, left_cache);
        }
        let result;
        try {
            if (!left_proto)
                result = compare_pojo(left, right);
            else if (!Reflect.getPrototypeOf(left_proto))
                result = compare_pojo(left, right);
            else if (Array.isArray(left))
                result = compare_array(left, right);
            else if (left instanceof Set)
                result = compare_set(left, right);
            else if (left instanceof Map)
                result = compare_map(left, right);
            else if (ArrayBuffer.isView(left))
                result = compare_buffer(left, right);
            else if (Symbol.toPrimitive in left)
                result = compare_primitive(left, right);
            else
                result = false;
        }
        finally {
            left_cache.set(right, result);
        }
        return result;
    }
    $.$mol_compare_deep = $mol_compare_deep;
    function compare_array(left, right) {
        const len = left.length;
        if (len !== right.length)
            return false;
        for (let i = 0; i < len; ++i) {
            if (!$mol_compare_deep(left[i], right[i]))
                return false;
        }
        return true;
    }
    function compare_buffer(left, right) {
        const len = left.byteLength;
        if (len !== right.byteLength)
            return false;
        for (let i = 0; i < len; ++i) {
            if (left[i] !== right[i])
                return false;
        }
        return true;
    }
    function compare_iterator(left, right) {
        while (true) {
            const left_next = left.next();
            const right_next = right.next();
            if (left_next.done !== right_next.done)
                return false;
            if (left_next.done)
                break;
            if (!$mol_compare_deep(left_next.value, right_next.value))
                return false;
        }
        return true;
    }
    function compare_set(left, right) {
        if (left.size !== right.size)
            return false;
        return compare_iterator(left.values(), right.values());
    }
    function compare_map(left, right) {
        if (left.size !== right.size)
            return false;
        return compare_iterator(left.keys(), right.keys())
            && compare_iterator(left.values(), right.values());
    }
    function compare_pojo(left, right) {
        const left_keys = Object.getOwnPropertyNames(left);
        const right_keys = Object.getOwnPropertyNames(right);
        if (!compare_array(left_keys, right_keys))
            return false;
        for (let key of left_keys) {
            if (!$mol_compare_deep(left[key], right[key]))
                return false;
        }
        const left_syms = Object.getOwnPropertySymbols(left);
        const right_syms = Object.getOwnPropertySymbols(right);
        if (!compare_array(left_syms, right_syms))
            return false;
        for (let key of left_syms) {
            if (!$mol_compare_deep(left[key], right[key]))
                return false;
        }
        return true;
    }
    function compare_primitive(left, right) {
        return Object.is(left[Symbol.toPrimitive]('default'), right[Symbol.toPrimitive]('default'));
    }
})($ || ($ = {}));
//mol/compare/deep/deep.ts
;
"use strict";
var $;
(function ($) {
    class $mol_wire_task extends $mol_wire_fiber {
        static getter(task) {
            return function $mol_wire_task_get(host, args) {
                const sub = $mol_wire_auto();
                const existen = sub?.track_next();
                reuse: if (existen) {
                    if (!(existen instanceof $mol_wire_task))
                        break reuse;
                    if (existen.host !== host)
                        break reuse;
                    if (existen.task !== task)
                        break reuse;
                    if (!$mol_compare_deep(existen.args, args))
                        break reuse;
                    return existen;
                }
                return new $mol_wire_task(`${host?.[Symbol.toStringTag] ?? host}.${task.name}(#)`, task, host, args);
            };
        }
        complete() {
            if (this.cache instanceof Promise)
                return;
            this.destructor();
        }
        put(next) {
            const prev = this.cache;
            this.cache = next;
            if (next instanceof Promise) {
                this.cursor = $mol_wire_cursor.fresh;
                if (next !== prev)
                    this.emit();
                return next;
            }
            this.cursor = $mol_wire_cursor.final;
            if (this.sub_empty)
                this.destructor();
            else if (next !== prev)
                this.emit();
            return next;
        }
    }
    $.$mol_wire_task = $mol_wire_task;
})($ || ($ = {}));
//mol/wire/task/task.ts
;
"use strict";
var $;
(function ($) {
    function $mol_wire_method(host, field, descr) {
        if (!descr)
            descr = Reflect.getOwnPropertyDescriptor(host, field);
        const orig = descr?.value ?? host[field];
        const sup = Reflect.getPrototypeOf(host);
        if (typeof sup[field] === 'function') {
            Object.defineProperty(orig, 'name', { value: sup[field].name });
        }
        const temp = $mol_wire_task.getter(orig);
        const value = function (...args) {
            const fiber = temp(this ?? null, args);
            return fiber.sync();
        };
        Object.defineProperty(value, 'name', { value: orig.name + ' ' });
        Object.assign(value, { orig });
        const descr2 = { ...descr, value };
        Reflect.defineProperty(host, field, descr2);
        return descr2;
    }
    $.$mol_wire_method = $mol_wire_method;
})($ || ($ = {}));
//mol/wire/method/method.ts
;
"use strict";
//mol/type/tail/tail.ts
;
"use strict";
//mol/type/foot/foot.ts
;
"use strict";
var $;
(function ($) {
    const catched = new WeakMap();
    function $mol_fail_catch(error) {
        if (typeof error !== 'object')
            return false;
        if (error instanceof Promise)
            $mol_fail_hidden(error);
        if (catched.get(error))
            return false;
        catched.set(error, true);
        return true;
    }
    $.$mol_fail_catch = $mol_fail_catch;
})($ || ($ = {}));
//mol/fail/catch/catch.ts
;
"use strict";
var $;
(function ($) {
    function $mol_fail_log(error) {
        if (error instanceof Promise)
            return false;
        if (!$mol_fail_catch(error))
            return false;
        console.error(error);
        return true;
    }
    $.$mol_fail_log = $mol_fail_log;
})($ || ($ = {}));
//mol/fail/log/log.ts
;
"use strict";
var $;
(function ($) {
    class $mol_wire_atom extends $mol_wire_fiber {
        static solo(host, task) {
            const field = task.name + '()';
            const existen = Object.getOwnPropertyDescriptor(host ?? task, field)?.value;
            if (existen)
                return existen;
            const prefix = host?.[Symbol.toStringTag] ?? (host instanceof Function ? $$.$mol_func_name(host) : host);
            const key = `${prefix}.${field}`;
            const fiber = new $mol_wire_atom(key, task, host, []);
            (host ?? task)[field] = fiber;
            return fiber;
        }
        static plex(host, task, key) {
            const field = task.name + '()';
            let dict = Object.getOwnPropertyDescriptor(host ?? task, field)?.value;
            const prefix = host?.[Symbol.toStringTag] ?? (host instanceof Function ? $$.$mol_func_name(host) : host);
            const id = `${prefix}.${task.name}(${$mol_key(key)})`;
            if (dict) {
                const existen = dict.get(id);
                if (existen)
                    return existen;
            }
            else {
                dict = (host ?? task)[field] = new Map();
            }
            const fiber = new $mol_wire_atom(id, task, host, [key]);
            dict.set(id, fiber);
            return fiber;
        }
        static watching = new Set();
        static watcher = null;
        static watch() {
            $mol_wire_atom.watcher = new $mol_after_frame($mol_wire_atom.watch);
            for (const atom of $mol_wire_atom.watching) {
                if (atom.cursor === $mol_wire_cursor.final) {
                    $mol_wire_atom.watching.delete(atom);
                }
                else {
                    atom.cursor = $mol_wire_cursor.stale;
                    atom.fresh();
                }
            }
        }
        watch() {
            if (!$mol_wire_atom.watcher) {
                $mol_wire_atom.watcher = new $mol_after_frame($mol_wire_atom.watch);
            }
            $mol_wire_atom.watching.add(this);
        }
        resync(args) {
            return this.put(this.task.call(this.host, ...args));
        }
        once() {
            return this.sync();
        }
        channel() {
            return Object.assign((next) => {
                if (next !== undefined)
                    return this.resync([...this.args, next]);
                if (!$mol_wire_fiber.warm)
                    return this.result();
                if ($mol_wire_auto() instanceof $mol_wire_task) {
                    return this.once();
                }
                else {
                    return this.sync();
                }
            }, { atom: this });
        }
        destructor() {
            super.destructor();
            const prev = this.cache;
            if ($mol_owning_check(this, prev)) {
                prev.destructor();
            }
            if (this.pub_from === 0) {
                ;
                (this.host ?? this.task)[this.field()] = null;
            }
            else {
                ;
                (this.host ?? this.task)[this.field()].delete(this[Symbol.toStringTag]);
            }
        }
        put(next) {
            const prev = this.cache;
            update: if (next !== prev) {
                try {
                    if ($mol_compare_deep(prev, next))
                        break update;
                }
                catch (error) {
                    $mol_fail_log(error);
                }
                if ($mol_owning_check(this, prev)) {
                    prev.destructor();
                }
                if ($mol_owning_catch(this, next)) {
                    try {
                        next[Symbol.toStringTag] = this[Symbol.toStringTag];
                    }
                    catch {
                        Object.defineProperty(next, Symbol.toStringTag, { value: this[Symbol.toStringTag] });
                    }
                }
                if (!this.sub_empty)
                    this.emit();
            }
            this.cache = next;
            this.cursor = $mol_wire_cursor.fresh;
            if (next instanceof Promise)
                return next;
            this.complete_pubs();
            return next;
        }
    }
    __decorate([
        $mol_wire_method
    ], $mol_wire_atom.prototype, "resync", null);
    __decorate([
        $mol_wire_method
    ], $mol_wire_atom.prototype, "once", null);
    $.$mol_wire_atom = $mol_wire_atom;
})($ || ($ = {}));
//mol/wire/atom/atom.ts
;
"use strict";
var $;
(function ($) {
    function $mol_wire_solo(host, field, descr) {
        if (!descr)
            descr = Reflect.getOwnPropertyDescriptor(host, field);
        const orig = descr?.value ?? host[field];
        const sup = Reflect.getPrototypeOf(host);
        if (typeof sup[field] === 'function') {
            Object.defineProperty(orig, 'name', { value: sup[field].name });
        }
        const descr2 = {
            ...descr,
            value: function (...args) {
                let atom = $mol_wire_atom.solo(this, orig);
                if ((args.length === 0) || (args[0] === undefined)) {
                    if (!$mol_wire_fiber.warm)
                        return atom.result();
                    if ($mol_wire_auto() instanceof $mol_wire_task) {
                        return atom.once();
                    }
                    else {
                        return atom.sync();
                    }
                }
                return atom.resync(args);
            }
        };
        Reflect.defineProperty(descr2.value, 'name', { value: orig.name + ' ' });
        Object.assign(descr2.value, { orig });
        Reflect.defineProperty(host, field, descr2);
        return descr2;
    }
    $.$mol_wire_solo = $mol_wire_solo;
})($ || ($ = {}));
//mol/wire/solo/solo.ts
;
"use strict";
var $;
(function ($) {
    function $mol_wire_plex(host, field, descr) {
        if (!descr)
            descr = Reflect.getOwnPropertyDescriptor(host, field);
        const orig = descr?.value ?? host[field];
        const sup = Reflect.getPrototypeOf(host);
        if (typeof sup[field] === 'function') {
            Object.defineProperty(orig, 'name', { value: sup[field].name });
        }
        const descr2 = {
            ...descr,
            value: function (...args) {
                let atom = $mol_wire_atom.plex(this, orig, args[0]);
                if ((args.length === 1) || (args[1] === undefined)) {
                    if (!$mol_wire_fiber.warm)
                        return atom.result();
                    if ($mol_wire_auto() instanceof $mol_wire_task) {
                        return atom.once();
                    }
                    else {
                        return atom.sync();
                    }
                }
                return atom.resync(args);
            }
        };
        Reflect.defineProperty(descr2.value, 'name', { value: orig.name + ' ' });
        Object.assign(descr2.value, { orig });
        Reflect.defineProperty(host, field, descr2);
        return descr2;
    }
    $.$mol_wire_plex = $mol_wire_plex;
})($ || ($ = {}));
//mol/wire/plex/plex.ts
;
"use strict";
var $;
(function ($) {
    $.$mol_mem = $mol_wire_solo;
    $.$mol_mem_key = $mol_wire_plex;
})($ || ($ = {}));
//mol/mem/mem.ts
;
"use strict";
var $;
(function ($) {
    class $mol_window extends $mol_object {
        static size() {
            this.resizes();
            return {
                width: self.innerWidth,
                height: self.innerHeight,
            };
        }
        static resizes(next) { return next; }
    }
    __decorate([
        $mol_mem
    ], $mol_window, "size", null);
    __decorate([
        $mol_mem
    ], $mol_window, "resizes", null);
    $.$mol_window = $mol_window;
    self.addEventListener('resize', event => $mol_window.resizes(event));
})($ || ($ = {}));
//mol/window/window.web.ts
;
"use strict";
var $;
(function ($) {
    class $mol_view_selection extends $mol_object {
        static focused(next, notify) {
            const parents = [];
            let element = next?.[0] ?? $mol_dom_context.document.activeElement;
            while (element) {
                parents.push(element);
                element = element.parentNode;
            }
            if (!next || notify)
                return parents;
            new $mol_after_tick(() => {
                const element = this.focused()[0];
                if (element)
                    element.focus();
                else
                    $mol_dom_context.blur();
            });
            return parents;
        }
    }
    __decorate([
        $mol_mem
    ], $mol_view_selection, "focused", null);
    $.$mol_view_selection = $mol_view_selection;
})($ || ($ = {}));
//mol/view/selection/selection.ts
;
"use strict";
var $;
(function ($) {
    function $mol_maybe(value) {
        return (value == null) ? [] : [value];
    }
    $.$mol_maybe = $mol_maybe;
})($ || ($ = {}));
//mol/maybe/maybe.ts
;
"use strict";
var $;
(function ($) {
    if ($mol_dom_context.document) {
        $mol_dom_context.document.documentElement.addEventListener('focus', (event) => {
            $mol_view_selection.focused($mol_maybe($mol_dom_context.document.activeElement), 'notify');
        }, true);
    }
})($ || ($ = {}));
//mol/view/selection/selection.web.ts
;
"use strict";
var $;
(function ($) {
    class $mol_wrapper extends $mol_object2 {
        static wrap;
        static run(task) {
            return this.func(task)();
        }
        static func(func) {
            return this.wrap(func);
        }
        static get class() {
            return (Class) => {
                const construct = (target, args) => new Class(...args);
                const handler = {
                    construct: this.func(construct)
                };
                handler[Symbol.toStringTag] = Class.name + '#';
                return new Proxy(Class, handler);
            };
        }
        static get method() {
            return (obj, name, descr) => {
                descr.value = this.func(descr.value);
                return descr;
            };
        }
        static get field() {
            return (obj, name, descr) => {
                descr.get = descr.set = this.func(descr.get);
                return descr;
            };
        }
    }
    $.$mol_wrapper = $mol_wrapper;
})($ || ($ = {}));
//mol/wrapper/wrapper.ts
;
"use strict";
var $;
(function ($) {
    class $mol_memo extends $mol_wrapper {
        static wrap(task) {
            const store = new WeakMap();
            return function (next) {
                if (next === undefined && store.has(this))
                    return store.get(this);
                const val = task.call(this, next) ?? next;
                store.set(this, val);
                return val;
            };
        }
    }
    $.$mol_memo = $mol_memo;
})($ || ($ = {}));
//mol/memo/memo.ts
;
"use strict";
var $;
(function ($) {
    function $mol_dom_qname(name) {
        return name.replace(/\W/g, '').replace(/^(?=\d+)/, '_');
    }
    $.$mol_dom_qname = $mol_dom_qname;
})($ || ($ = {}));
//mol/dom/qname/qname.ts
;
"use strict";
var $;
(function ($) {
    function $mol_wire_probe(task, next) {
        const warm = $mol_wire_fiber.warm;
        try {
            $mol_wire_fiber.warm = false;
            return task();
        }
        finally {
            $mol_wire_fiber.warm = warm;
        }
    }
    $.$mol_wire_probe = $mol_wire_probe;
})($ || ($ = {}));
//mol/wire/probe/probe.ts
;
"use strict";
var $;
(function ($) {
    function $mol_wire_watch() {
        const atom = $mol_wire_auto();
        if (atom instanceof $mol_wire_atom) {
            atom.watch();
        }
        else {
            $mol_fail(new Error('Atom is required for watching'));
        }
    }
    $.$mol_wire_watch = $mol_wire_watch;
})($ || ($ = {}));
//mol/wire/watch/watch.ts
;
"use strict";
var $;
(function ($) {
    function $mol_wire_solid() {
        const current = $mol_wire_auto();
        if (current.reap !== nothing) {
            current?.sub_on(sub, sub.data.length);
        }
        current.reap = nothing;
    }
    $.$mol_wire_solid = $mol_wire_solid;
    const nothing = () => { };
    const sub = new $mol_wire_pub_sub;
})($ || ($ = {}));
//mol/wire/solid/solid.ts
;
"use strict";
var $;
(function ($) {
    function $mol_const(value) {
        const getter = (() => value);
        getter['()'] = value;
        getter[Symbol.toStringTag] = value;
        return getter;
    }
    $.$mol_const = $mol_const;
})($ || ($ = {}));
//mol/const/const.ts
;
"use strict";
var $;
(function ($) {
    function $mol_dom_render_attributes(el, attrs) {
        for (let name in attrs) {
            let val = attrs[name];
            if (val === null || val === false) {
                if (!el.hasAttribute(name))
                    continue;
                el.removeAttribute(name);
            }
            else {
                const str = String(val);
                if (el.getAttribute(name) === str)
                    continue;
                el.setAttribute(name, str);
            }
        }
    }
    $.$mol_dom_render_attributes = $mol_dom_render_attributes;
})($ || ($ = {}));
//mol/dom/render/attributes/attributes.ts
;
"use strict";
var $;
(function ($) {
    function $mol_wire_async(obj) {
        let fiber;
        const temp = $mol_wire_task.getter(obj);
        return new Proxy(obj, {
            get(obj, field) {
                const val = obj[field];
                if (typeof val !== 'function')
                    return val;
                let fiber;
                const temp = $mol_wire_task.getter(val);
                return function $mol_wire_async(...args) {
                    fiber?.destructor();
                    fiber = temp(obj, args);
                    return fiber.async();
                };
            },
            apply(obj, self, args) {
                fiber?.destructor();
                fiber = temp(self, args);
                return fiber.async();
            },
        });
    }
    $.$mol_wire_async = $mol_wire_async;
})($ || ($ = {}));
//mol/wire/async/async.ts
;
"use strict";
var $;
(function ($) {
    function $mol_dom_render_events(el, events, passive = false) {
        for (let name in events) {
            el.addEventListener(name, events[name], { passive });
        }
    }
    $.$mol_dom_render_events = $mol_dom_render_events;
})($ || ($ = {}));
//mol/dom/render/events/events.ts
;
"use strict";
var $;
(function ($) {
    function $mol_dom_render_styles(el, styles) {
        for (let name in styles) {
            let val = styles[name];
            const style = el.style;
            if (typeof val === 'number') {
                style[name] = `${val}px`;
            }
            else {
                style[name] = val;
            }
        }
    }
    $.$mol_dom_render_styles = $mol_dom_render_styles;
})($ || ($ = {}));
//mol/dom/render/styles/styles.ts
;
"use strict";
var $;
(function ($) {
    function $mol_dom_render_children(el, childNodes) {
        const node_set = new Set(childNodes);
        let nextNode = el.firstChild;
        for (let view of childNodes) {
            if (view == null)
                continue;
            if (view instanceof $mol_dom_context.Node) {
                while (true) {
                    if (!nextNode) {
                        el.appendChild(view);
                        break;
                    }
                    if (nextNode == view) {
                        nextNode = nextNode.nextSibling;
                        break;
                    }
                    else {
                        if (node_set.has(nextNode)) {
                            el.insertBefore(view, nextNode);
                            break;
                        }
                        else {
                            const nn = nextNode.nextSibling;
                            el.removeChild(nextNode);
                            nextNode = nn;
                        }
                    }
                }
            }
            else {
                if (nextNode && nextNode.nodeName === '#text') {
                    const str = String(view);
                    if (nextNode.nodeValue !== str)
                        nextNode.nodeValue = str;
                    nextNode = nextNode.nextSibling;
                }
                else {
                    const textNode = $mol_dom_context.document.createTextNode(String(view));
                    el.insertBefore(textNode, nextNode);
                }
            }
        }
        while (nextNode) {
            const currNode = nextNode;
            nextNode = currNode.nextSibling;
            el.removeChild(currNode);
        }
    }
    $.$mol_dom_render_children = $mol_dom_render_children;
})($ || ($ = {}));
//mol/dom/render/children/children.ts
;
"use strict";
var $;
(function ($) {
    function $mol_dom_render_fields(el, fields) {
        for (let key in fields) {
            const val = fields[key];
            if (val === undefined)
                continue;
            el[key] = val;
        }
    }
    $.$mol_dom_render_fields = $mol_dom_render_fields;
})($ || ($ = {}));
//mol/dom/render/fields/fields.ts
;
"use strict";
//mol/type/keys/extract/extract.ts
;
"use strict";
//mol/type/pick/pick.ts
;
"use strict";
var $;
(function ($) {
    class $mol_decor {
        value;
        constructor(value) {
            this.value = value;
        }
        prefix() { return ''; }
        valueOf() { return this.value; }
        postfix() { return ''; }
        toString() {
            return `${this.prefix()}${this.valueOf()}${this.postfix()}`;
        }
    }
    $.$mol_decor = $mol_decor;
})($ || ($ = {}));
//mol/decor/decor.ts
;
"use strict";
var $;
(function ($) {
    class $mol_style_unit extends $mol_decor {
        literal;
        constructor(value, literal) {
            super(value);
            this.literal = literal;
        }
        postfix() {
            return this.literal;
        }
        static per(value) { return new $mol_style_unit(value, '%'); }
        static px(value) { return new $mol_style_unit(value, 'px'); }
        static mm(value) { return new $mol_style_unit(value, 'mm'); }
        static cm(value) { return new $mol_style_unit(value, 'cm'); }
        static Q(value) { return new $mol_style_unit(value, 'Q'); }
        static in(value) { return new $mol_style_unit(value, 'in'); }
        static pc(value) { return new $mol_style_unit(value, 'pc'); }
        static pt(value) { return new $mol_style_unit(value, 'pt'); }
        static cap(value) { return new $mol_style_unit(value, 'cap'); }
        static ch(value) { return new $mol_style_unit(value, 'ch'); }
        static em(value) { return new $mol_style_unit(value, 'em'); }
        static rem(value) { return new $mol_style_unit(value, 'rem'); }
        static ex(value) { return new $mol_style_unit(value, 'ex'); }
        static ic(value) { return new $mol_style_unit(value, 'ic'); }
        static lh(value) { return new $mol_style_unit(value, 'lh'); }
        static rlh(value) { return new $mol_style_unit(value, 'rlh'); }
        static vh(value) { return new $mol_style_unit(value, 'vh'); }
        static vw(value) { return new $mol_style_unit(value, 'vw'); }
        static vi(value) { return new $mol_style_unit(value, 'vi'); }
        static vb(value) { return new $mol_style_unit(value, 'vb'); }
        static vmin(value) { return new $mol_style_unit(value, 'vmin'); }
        static vmax(value) { return new $mol_style_unit(value, 'vmax'); }
        static deg(value) { return new $mol_style_unit(value, 'deg'); }
        static rad(value) { return new $mol_style_unit(value, 'rad'); }
        static grad(value) { return new $mol_style_unit(value, 'grad'); }
        static turn(value) { return new $mol_style_unit(value, 'turn'); }
        static s(value) { return new $mol_style_unit(value, 's'); }
        static ms(value) { return new $mol_style_unit(value, 'ms'); }
    }
    $.$mol_style_unit = $mol_style_unit;
})($ || ($ = {}));
//mol/style/unit/unit.ts
;
"use strict";
var $;
(function ($) {
    const { per } = $mol_style_unit;
    class $mol_style_func extends $mol_decor {
        name;
        constructor(name, value) {
            super(value);
            this.name = name;
        }
        prefix() { return this.name + '('; }
        postfix() { return ')'; }
        static calc(value) {
            return new $mol_style_func('calc', value);
        }
        static vary(name) {
            return new $mol_style_func('var', name);
        }
        static url(href) {
            return new $mol_style_func('url', JSON.stringify(href));
        }
        static hsla(hue, saturation, lightness, alpha) {
            return new $mol_style_func('hsla', [hue, per(saturation), per(lightness), alpha]);
        }
        static clamp(min, mid, max) {
            return new $mol_style_func('clamp', [min, mid, max]);
        }
        static rgba(red, green, blue, alpha) {
            return new $mol_style_func('rgba', [red, green, blue, alpha]);
        }
        static scale(zoom) {
            return new $mol_style_func('scale', [zoom]);
        }
    }
    $.$mol_style_func = $mol_style_func;
})($ || ($ = {}));
//mol/style/func/func.ts
;
"use strict";
var $;
(function ($) {
    const { vary } = $mol_style_func;
    $.$mol_theme = {
        back: vary('--mol_theme_back'),
        hover: vary('--mol_theme_hover'),
        card: vary('--mol_theme_card'),
        current: vary('--mol_theme_current'),
        special: vary('--mol_theme_special'),
        text: vary('--mol_theme_text'),
        control: vary('--mol_theme_control'),
        shade: vary('--mol_theme_shade'),
        line: vary('--mol_theme_line'),
        focus: vary('--mol_theme_focus'),
        field: vary('--mol_theme_field'),
        image: vary('--mol_theme_image'),
    };
})($ || ($ = {}));
//mol/theme/theme.ts
;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/theme/theme.css", ":root {\n\t--mol_theme_hue: 210deg;\n\t--mol_theme_luma: -1;\n\t--mol_theme_satur: 1;\n\t--mol_theme_image: none;\n}\n\n[mol_theme] {\n\tcolor: var(--mol_theme_text);\n\tfill: var(--mol_theme_text);\n}\n:where([mol_theme]) {\n\tbackground-color: var(--mol_theme_back);\n}\n\t\n:root, [mol_theme] {\n\t--mol_theme_back: hsl( var(--mol_theme_hue), calc( var(--mol_theme_satur) * 20% ), calc( 55% + 45% * var(--mol_theme_luma) ) );\n\t--mol_theme_text: hsl( var(--mol_theme_hue), 0%, calc( 40% - 40% * var(--mol_theme_luma) ) );\n\t--mol_theme_field: hsl( var(--mol_theme_hue), calc( var(--mol_theme_satur) * 50% ), calc( 54% + 46% * var(--mol_theme_luma) ), .25 );\n\t\n\t--mol_theme_card: hsl( var(--mol_theme_hue), calc( var(--mol_theme_satur) * 50% ), calc( 55% + 35% * var(--mol_theme_luma) ), .25 );\n\t--mol_theme_hover: hsl( var(--mol_theme_hue), 0%, 50%, .1 );\n\t--mol_theme_line: hsl( var(--mol_theme_hue), 0%, 50%, .2 );\n\t--mol_theme_shade: hsl( var(--mol_theme_hue), 0%, 50%, 1 );\n\t\n\t--mol_theme_control: hsl( var(--mol_theme_hue), 50%, calc( 50% - 10% * var(--mol_theme_luma) ) );\n\t--mol_theme_current: hsl( calc( var(--mol_theme_hue) - 90deg ), 50%, calc( 50% - 10% * var(--mol_theme_luma) ) );\n\t--mol_theme_special: hsl( calc( var(--mol_theme_hue) + 90deg ), 50%, calc( 50% - 10% * var(--mol_theme_luma) ) );\n\t--mol_theme_focus: hsl( calc( var(--mol_theme_hue) + 180deg ), 100%, calc( 55% - 10% * var(--mol_theme_luma) ) );\n\t\n}\n\n[mol_theme=\"$mol_theme_light\"] {\n\t--mol_theme_luma: 1;\n\t--mol_theme_image: none;\n}\n\n[mol_theme=\"$mol_theme_dark\"] {\n\t--mol_theme_luma: -1;\n\t--mol_theme_image: invert(1) hue-rotate( 180deg );\n}\n\n[mol_theme=\"$mol_theme_base\"] {\n\t--mol_theme_luma: -2;\n\t--mol_theme_back: hsl( var(--mol_theme_hue), 50%, 40% );\n\t--mol_theme_hover: hsl( var(--mol_theme_hue), 60%, 30% );\n\t--mol_theme_current: hsl( var(--mol_theme_hue), 100%, 20% );\n}\n\n[mol_theme=\"$mol_theme_current\"] {\n\tbackground-color: var(--mol_theme_back);\n\t--mol_theme_back: hsl( calc( var(--mol_theme_hue) - 90deg ), 50%, calc( 50% + 30% * var(--mol_theme_luma) ) );\n}\n\n[mol_theme=\"$mol_theme_special\"] {\n\t--mol_theme_card: hsl( calc( var(--mol_theme_hue) + 90deg ), 50%, calc( 55% + 35% * var(--mol_theme_luma) ), .25 );\n}\n\n[mol_theme=\"$mol_theme_accent\"] {\n\tbackground-color: var(--mol_theme_back);\n\t--mol_theme_luma: -2;\n\t--mol_theme_back: hsl( calc( var(--mol_theme_hue) + 180deg ), 90%, 50% );\n\t--mol_theme_hover: hsl( calc( var(--mol_theme_hue) + 180deg ), 80%, 35% );\n}\n\n[mol_theme=\"$mol_theme_accent\"] [mol_theme=\"$mol_theme_accent\"] {\n\t--mol_theme_back: black;\n}\n");
})($ || ($ = {}));
//mol/theme/-css/theme.css.ts
;
"use strict";
var $;
(function ($) {
    const { vary } = $mol_style_func;
    $.$mol_gap = {
        block: vary('--mol_gap_block'),
        text: vary('--mol_gap_text'),
        round: vary('--mol_gap_round'),
        space: vary('--mol_gap_space'),
        blur: vary('--mol_gap_blur'),
    };
})($ || ($ = {}));
//mol/gap/gap.ts
;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/gap/gap.css", ":root {\n\t--mol_gap_block: .75rem;\n\t--mol_gap_text: .5rem .75rem;\n\t--mol_gap_round: .25rem;\n\t--mol_gap_space: .25rem;\n\t--mol_gap_blur: .5rem;\n}\n");
})($ || ($ = {}));
//mol/gap/-css/gap.css.ts
;
"use strict";
var $;
(function ($) {
    function $mol_view_visible_width() {
        return $mol_window.size().width;
    }
    $.$mol_view_visible_width = $mol_view_visible_width;
    function $mol_view_visible_height() {
        return $mol_window.size().height;
    }
    $.$mol_view_visible_height = $mol_view_visible_height;
    function $mol_view_state_key(suffix) {
        return suffix;
    }
    $.$mol_view_state_key = $mol_view_state_key;
    const error_showed = new WeakMap();
    class $mol_view extends $mol_object {
        static Root(id) {
            return new this;
        }
        autorun() {
            try {
                this.dom_tree();
                document.title = this.title();
            }
            catch (error) {
                $mol_fail_log(error);
            }
        }
        static autobind() {
            const nodes = $mol_dom_context.document.querySelectorAll('[mol_view_root]:not([mol_view_root=""])');
            for (let i = nodes.length - 1; i >= 0; --i) {
                const name = nodes.item(i).getAttribute('mol_view_root');
                const View = $[name];
                if (!View) {
                    console.error(`Can not attach view. Class not found: ${name}`);
                    continue;
                }
                const view = View.Root(i);
                view.dom_node(nodes.item(i));
                view.autorun();
            }
        }
        title() {
            return this.toString().match(/.*\.(\w+)/)?.[1] ?? this.toString();
        }
        focused(next) {
            let node = this.dom_node();
            const value = $mol_view_selection.focused(next === undefined ? undefined : (next ? [node] : []));
            return value.indexOf(node) !== -1;
        }
        state_key(suffix = '') {
            return this.$.$mol_view_state_key(suffix);
        }
        dom_name() {
            return $mol_dom_qname(this.constructor.toString()) || 'div';
        }
        dom_name_space() { return 'http://www.w3.org/1999/xhtml'; }
        sub() {
            return [];
        }
        sub_visible() {
            return this.sub();
        }
        minimal_width() {
            let min = 0;
            try {
                const sub = this.sub();
                if (!sub)
                    return 0;
                sub.forEach(view => {
                    if (view instanceof $mol_view) {
                        min = Math.max(min, view.minimal_width());
                    }
                });
            }
            catch (error) {
                $mol_fail_log(error);
                return 24;
            }
            return min;
        }
        maximal_width() {
            return this.minimal_width();
        }
        minimal_height() {
            let min = 0;
            try {
                for (const view of this.sub() ?? []) {
                    if (view instanceof $mol_view) {
                        min = Math.max(min, view.minimal_height());
                    }
                }
            }
            catch (error) {
                $mol_fail_log(error);
                return 24;
            }
            return min;
        }
        static watchers = new Set();
        view_rect() {
            if ($mol_wire_probe(() => this.view_rect()) === undefined) {
                $mol_wire_watch();
                return null;
            }
            else {
                const { width, height, left, right, top, bottom } = this.dom_node().getBoundingClientRect();
                return { width, height, left, right, top, bottom };
            }
        }
        dom_id() {
            return this.toString();
        }
        dom_node(next) {
            $mol_wire_solid();
            const node = next || $mol_dom_context.document.createElementNS(this.dom_name_space(), this.dom_name());
            const id = this.dom_id();
            node.setAttribute('id', id);
            node.toString = $mol_const('<#' + id + '>');
            $mol_dom_render_attributes(node, this.attr_static());
            const events = $mol_wire_async(this.event());
            $mol_dom_render_events(node, events);
            return node;
        }
        dom_final() {
            this.render();
            const sub = this.sub_visible();
            if (!sub)
                return;
            for (const el of sub) {
                if (el && typeof el === 'object' && 'dom_final' in el) {
                    el['dom_final']();
                }
            }
            return this.dom_node();
        }
        dom_tree(next) {
            const node = this.dom_node(next);
            render: try {
                $mol_dom_render_attributes(node, { mol_view_error: null });
                try {
                    this.render();
                }
                finally {
                    for (let plugin of this.plugins()) {
                        if (plugin instanceof $mol_plugin) {
                            plugin.dom_tree();
                        }
                    }
                }
            }
            catch (error) {
                $mol_fail_log(error);
                $mol_dom_render_attributes(node, { mol_view_error: error.name || error.constructor.name });
                if (error instanceof Promise)
                    break render;
                if ((error_showed.get(error) ?? this) !== this)
                    break render;
                try {
                    const message = error.message || error;
                    node.innerText = message.replace(/^|$/mg, '\xA0\xA0');
                }
                catch { }
                error_showed.set(error, this);
            }
            try {
                this.auto();
            }
            catch (error) {
                $mol_fail_log(error);
            }
            return node;
        }
        dom_node_actual() {
            const node = this.dom_node();
            $mol_dom_render_styles(node, this.style_size());
            const attr = this.attr();
            const style = this.style();
            const fields = this.field();
            $mol_dom_render_attributes(node, attr);
            $mol_dom_render_styles(node, style);
            return node;
        }
        auto() {
            return null;
        }
        render() {
            const node = this.dom_node_actual();
            const sub = this.sub_visible();
            if (!sub)
                return;
            const nodes = sub.map(child => {
                if (child == null)
                    return null;
                return (child instanceof $mol_view)
                    ? child.dom_node()
                    : child instanceof $mol_dom_context.Node
                        ? child
                        : String(child);
            });
            $mol_dom_render_children(node, nodes);
            for (const el of sub)
                if (el && typeof el === 'object' && 'dom_tree' in el)
                    el['dom_tree']();
            $mol_dom_render_fields(node, this.field());
        }
        static view_classes() {
            const proto = this.prototype;
            let current = proto;
            const classes = [];
            while (current) {
                if (current.constructor.name !== classes.at(-1)?.name) {
                    classes.push(current.constructor);
                }
                if (!(current instanceof $mol_view))
                    break;
                current = Object.getPrototypeOf(current);
            }
            return classes;
        }
        static _view_names;
        static view_names(suffix) {
            let cache = Reflect.getOwnPropertyDescriptor(this, '_view_names')?.value;
            if (!cache)
                cache = this._view_names = new Map;
            const cached = cache.get(suffix);
            if (cached)
                return cached;
            const names = [];
            const suffix2 = '_' + suffix[0].toLowerCase() + suffix.substring(1);
            for (const Class of this.view_classes()) {
                if (suffix in Class.prototype)
                    names.push(this.$.$mol_func_name(Class) + suffix2);
                else
                    break;
            }
            cache.set(suffix, names);
            return names;
        }
        view_names_owned() {
            const names = [];
            let owner = $mol_owning_get(this);
            if (!(owner?.host instanceof $mol_view))
                return names;
            const suffix = owner.task.name.trim();
            const suffix2 = '_' + suffix[0].toLowerCase() + suffix.substring(1);
            names.push(...owner.host.constructor.view_names(suffix));
            for (let prefix of owner.host.view_names_owned()) {
                names.push(prefix + suffix2);
            }
            return names;
        }
        view_names() {
            const names = new Set();
            for (let name of this.view_names_owned())
                names.add(name);
            for (let Class of this.constructor.view_classes()) {
                const name = this.$.$mol_func_name(Class);
                if (name)
                    names.add(name);
            }
            return names;
        }
        attr_static() {
            let attrs = {};
            for (let name of this.view_names())
                attrs[name.replace(/\$/g, '').replace(/^(?=\d)/, '_').toLowerCase()] = '';
            return attrs;
        }
        attr() {
            return {};
        }
        style_size() {
            return {
                minHeight: this.minimal_height(),
                minWidth: this.minimal_width(),
            };
        }
        style() {
            return {};
        }
        field() {
            return {};
        }
        event() {
            return {};
        }
        plugins() {
            return [];
        }
        [$mol_dev_format_head]() {
            return $mol_dev_format_span({}, $mol_dev_format_native(this));
        }
        *view_find(check, path = []) {
            if (check(this))
                return yield [...path, this];
            try {
                for (const item of this.sub()) {
                    if (item instanceof $mol_view) {
                        yield* item.view_find(check, [...path, this]);
                    }
                }
            }
            catch (error) {
                if (error instanceof Promise)
                    $mol_fail_hidden(error);
                $mol_fail_log(error);
            }
        }
        force_render(path) {
            const kids = this.sub();
            const index = kids.findIndex(item => {
                if (item instanceof $mol_view) {
                    return path.has(item);
                }
                else {
                    return false;
                }
            });
            if (index >= 0) {
                kids[index].force_render(path);
            }
        }
        ensure_visible(view, align = "start") {
            const path = this.view_find(v => v === view).next().value;
            this.force_render(new Set(path));
            this.dom_final();
            view.dom_node().scrollIntoView({ block: align });
        }
        bring() {
            const win = this.$.$mol_dom_context;
            if (win.parent !== win.self && !win.document.hasFocus())
                return;
            new this.$.$mol_after_frame(() => {
                this.dom_node().scrollIntoView({ block: 'start', inline: 'end' });
                this.focused(true);
            });
        }
    }
    __decorate([
        $mol_mem
    ], $mol_view.prototype, "autorun", null);
    __decorate([
        $mol_mem
    ], $mol_view.prototype, "title", null);
    __decorate([
        $mol_mem
    ], $mol_view.prototype, "focused", null);
    __decorate([
        $mol_memo.method
    ], $mol_view.prototype, "dom_name", null);
    __decorate([
        $mol_mem
    ], $mol_view.prototype, "minimal_width", null);
    __decorate([
        $mol_mem
    ], $mol_view.prototype, "minimal_height", null);
    __decorate([
        $mol_mem
    ], $mol_view.prototype, "view_rect", null);
    __decorate([
        $mol_mem
    ], $mol_view.prototype, "dom_node", null);
    __decorate([
        $mol_mem
    ], $mol_view.prototype, "dom_final", null);
    __decorate([
        $mol_mem
    ], $mol_view.prototype, "dom_tree", null);
    __decorate([
        $mol_mem
    ], $mol_view.prototype, "dom_node_actual", null);
    __decorate([
        $mol_mem
    ], $mol_view.prototype, "render", null);
    __decorate([
        $mol_memo.method
    ], $mol_view.prototype, "view_names_owned", null);
    __decorate([
        $mol_memo.method
    ], $mol_view.prototype, "view_names", null);
    __decorate([
        $mol_mem_key
    ], $mol_view, "Root", null);
    __decorate([
        $mol_mem
    ], $mol_view, "autobind", null);
    __decorate([
        $mol_memo.method
    ], $mol_view, "view_classes", null);
    $.$mol_view = $mol_view;
})($ || ($ = {}));
//mol/view/view/view.ts
;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/view/view/view.css", "[mol_view] {\n\ttransition-property: height, width, min-height, min-width, max-width, max-height, transform;\n\ttransition-duration: .2s;\n\ttransition-timing-function: ease-out;\n\t-webkit-appearance: none;\n\tbox-sizing: border-box;\n\tdisplay: flex;\n\tflex-shrink: 0;\n\tcontain: style;\n\tscrollbar-color: var(--mol_theme_line) transparent;\n\tscrollbar-width: thin;\n}\t\n\n[mol_view]::selection {\n\tbackground: var(--mol_theme_line);\n}\t\n\n[mol_view]::-webkit-scrollbar {\n\twidth: .25rem;\n\theight: .25rem;\n}\n\n[mol_view]::-webkit-scrollbar-corner {\n\tbackground-color: var(--mol_theme_line);\n}\n\n[mol_view]::-webkit-scrollbar-track {\n\tbackground-color: transparent;\n}\n\n[mol_view]::-webkit-scrollbar-thumb {\n\tbackground-color: var(--mol_theme_line);\n\tborder-radius: var(--mol_gap_round);\n}\n\n[mol_view] > * {\n\tword-break: inherit;\n}\n\n[mol_view_root] {\n\tmargin: 0;\n\tpadding: 0;\n\twidth: 100%;\n\theight: 100%;\n\tbox-sizing: border-box;\n\tfont-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\n\tfont-size: 1rem;\n\tline-height: 1.5rem;\n\tbackground: var(--mol_theme_back);\n\tcolor: var(--mol_theme_text);\n\tcontain: unset; /** Fixes bg ignoring when applied to body on Chrome */\n\ttab-size: 4;\n}\n\n[mol_view][mol_view_error]:not([mol_view_error=\"Promise\"]) {\n\tbackground-image: repeating-linear-gradient(\n\t\t-45deg,\n\t\t#f92323,\n\t\t#f92323 .5rem,\n\t\t#ff3d3d .5rem,\n\t\t#ff3d3d 1.5rem\n\t);\n\tcolor: black;\n\talign-items: center;\n    justify-content: center;\n}\n\n@keyframes mol_view_wait {\n\tfrom {\n\t\topacity: .75;\n\t}\n\t80% {\n\t\topacity: .5;\n\t}\n\tto {\n\t\topacity: .75;\n\t}\n}\n\n:where([mol_view][mol_view_error=\"Promise\"]) {\n\tbackground: var(--mol_theme_hover);\n}\n\n[mol_view][mol_view_error=\"Promise\"] {\n\tanimation: mol_view_wait 1s steps( 10, end ) infinite;\n}\n");
})($ || ($ = {}));
//mol/view/view/-css/view.css.ts
;
"use strict";
var $;
(function ($) {
    $mol_dom_context.document?.addEventListener('DOMContentLoaded', () => $mol_view.autobind(), { once: true });
})($ || ($ = {}));
//mol/view/view/view.web.ts
;
"use strict";
var $;
(function ($) {
    class $mol_plugin extends $mol_view {
        dom_node(next) {
            const node = next || $mol_owning_get(this).host.dom_node();
            $mol_dom_render_attributes(node, this.attr_static());
            const events = $mol_wire_async(this.event());
            for (let event_name in events) {
                node.addEventListener(event_name, events[event_name], { passive: false });
            }
            return node;
        }
        attr_static() {
            return {};
        }
        event() {
            return {};
        }
        render() {
            this.dom_node_actual();
        }
    }
    __decorate([
        $mol_mem
    ], $mol_plugin.prototype, "dom_node", null);
    $.$mol_plugin = $mol_plugin;
})($ || ($ = {}));
//mol/plugin/plugin.ts
;
"use strict";
var $;
(function ($) {
    class $mol_stack extends $mol_view {
    }
    $.$mol_stack = $mol_stack;
})($ || ($ = {}));
//mol/stack/-view.tree/stack.view.tree.ts
;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/stack/stack.view.css", "[mol_stack] {\n\tdisplay: grid;\n\t/* width: max-content; */\n\t/* height: max-content; */\n\talign-items: flex-start;\n\tjustify-items: flex-start;\n}\n\n[mol_stack] > * {\n\tgrid-area: 1/1;\n}\n");
})($ || ($ = {}));
//mol/stack/-css/stack.view.css.ts
;
"use strict";
var $;
(function ($) {
    class $hyoo_game_realm extends $mol_object2 {
        map() {
            return " ";
        }
        map_rows() {
            return [];
        }
        map_width() {
            return 0;
        }
        map_height() {
            return 0;
        }
        spawn_pos() {
            return [
                0,
                0
            ];
        }
    }
    $.$hyoo_game_realm = $hyoo_game_realm;
})($ || ($ = {}));
//hyoo/game/realm/-view.tree/realm.view.tree.ts
;
"use strict";
var $;
(function ($) {
    function $mol_array_lottery(list) {
        return list[Math.floor(Math.random() * list.length)];
    }
    $.$mol_array_lottery = $mol_array_lottery;
})($ || ($ = {}));
//mol/array/lottery/lottery.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $hyoo_game_realm extends $.$hyoo_game_realm {
            map_rows() {
                return this.map().split('\n').map(row => [...row].map(p => p === '💫' ? '⚫' : p));
            }
            map_width() {
                return this.map_rows().reduce((max, row) => Math.max(max, row.length), 0);
            }
            map_height() {
                return this.map_rows().length;
            }
            coord_by_pos([px, py]) {
                return [
                    Math.floor(px),
                    Math.floor(py),
                ];
            }
            pos_by_coord([cx, cy]) {
                return [cx + .5, cy + .5];
            }
            place_by_pos([px, py]) {
                const [cx, cy] = this.coord_by_pos([px, py]);
                return this.map_rows()[cy]?.[cx] ?? '%';
            }
            spawn_places() {
                const places = [];
                const rows = this.map().split('\n');
                for (let y = 0; y < rows.length; ++y) {
                    const row = [...rows[y]];
                    for (let x = 0; x < row.length; ++x) {
                        if (row[x] !== '💫')
                            continue;
                        places.push({ x, y });
                    }
                }
                return places;
            }
            spawn_pos() {
                const place = $mol_array_lottery(this.spawn_places());
                return this.pos_by_coord([place.x, place.y]);
            }
        }
        __decorate([
            $mol_mem
        ], $hyoo_game_realm.prototype, "map_rows", null);
        __decorate([
            $mol_mem
        ], $hyoo_game_realm.prototype, "map_width", null);
        __decorate([
            $mol_mem
        ], $hyoo_game_realm.prototype, "map_height", null);
        __decorate([
            $mol_mem
        ], $hyoo_game_realm.prototype, "spawn_places", null);
        $$.$hyoo_game_realm = $hyoo_game_realm;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//hyoo/game/realm/realm.view.ts
;
"use strict";
var $;
(function ($) {
    class $hyoo_game_actor extends $mol_object2 {
        auto() {
            return null;
        }
        place_by_pos(id) {
            return this.Realm().place_by_pos(id);
        }
        Realm() {
            const obj = new this.$.$hyoo_game_realm();
            return obj;
        }
        pos(next) {
            if (next !== undefined)
                return next;
            return [
                ...this.pos_spawn()
            ];
        }
        pos_spawn(next) {
            if (next !== undefined)
                return next;
            return [
                0,
                0
            ];
        }
        angle(next) {
            if (next !== undefined)
                return next;
            return 0;
        }
        move_speed_track(next) {
            if (next !== undefined)
                return next;
            return 0;
        }
        move_speed_side(next) {
            if (next !== undefined)
                return next;
            return 0;
        }
        move_speed_track_max(next) {
            if (next !== undefined)
                return next;
            return 0.1;
        }
        move_speed_side_max(next) {
            if (next !== undefined)
                return next;
            return 0.1;
        }
        turn_speed(next) {
            if (next !== undefined)
                return next;
            return 0;
        }
        turn_speed_max(next) {
            if (next !== undefined)
                return next;
            return 0.05;
        }
        turn_left(next) {
            if (next !== undefined)
                return next;
            return false;
        }
        turn_right(next) {
            if (next !== undefined)
                return next;
            return false;
        }
        move_forward(next) {
            if (next !== undefined)
                return next;
            return false;
        }
        move_backward(next) {
            if (next !== undefined)
                return next;
            return false;
        }
        move_right(next) {
            if (next !== undefined)
                return next;
            return false;
        }
        move_left(next) {
            if (next !== undefined)
                return next;
            return false;
        }
    }
    __decorate([
        $mol_mem
    ], $hyoo_game_actor.prototype, "Realm", null);
    __decorate([
        $mol_mem
    ], $hyoo_game_actor.prototype, "pos", null);
    __decorate([
        $mol_mem
    ], $hyoo_game_actor.prototype, "pos_spawn", null);
    __decorate([
        $mol_mem
    ], $hyoo_game_actor.prototype, "angle", null);
    __decorate([
        $mol_mem
    ], $hyoo_game_actor.prototype, "move_speed_track", null);
    __decorate([
        $mol_mem
    ], $hyoo_game_actor.prototype, "move_speed_side", null);
    __decorate([
        $mol_mem
    ], $hyoo_game_actor.prototype, "move_speed_track_max", null);
    __decorate([
        $mol_mem
    ], $hyoo_game_actor.prototype, "move_speed_side_max", null);
    __decorate([
        $mol_mem
    ], $hyoo_game_actor.prototype, "turn_speed", null);
    __decorate([
        $mol_mem
    ], $hyoo_game_actor.prototype, "turn_speed_max", null);
    __decorate([
        $mol_mem
    ], $hyoo_game_actor.prototype, "turn_left", null);
    __decorate([
        $mol_mem
    ], $hyoo_game_actor.prototype, "turn_right", null);
    __decorate([
        $mol_mem
    ], $hyoo_game_actor.prototype, "move_forward", null);
    __decorate([
        $mol_mem
    ], $hyoo_game_actor.prototype, "move_backward", null);
    __decorate([
        $mol_mem
    ], $hyoo_game_actor.prototype, "move_right", null);
    __decorate([
        $mol_mem
    ], $hyoo_game_actor.prototype, "move_left", null);
    $.$hyoo_game_actor = $hyoo_game_actor;
})($ || ($ = {}));
//hyoo/game/actor/-view.tree/actor.view.tree.ts
;
"use strict";
var $;
(function ($) {
    class $mol_after_timeout extends $mol_object2 {
        delay;
        task;
        id;
        constructor(delay, task) {
            super();
            this.delay = delay;
            this.task = task;
            this.id = setTimeout(task, delay);
        }
        destructor() {
            clearTimeout(this.id);
        }
    }
    $.$mol_after_timeout = $mol_after_timeout;
})($ || ($ = {}));
//mol/after/timeout/timeout.ts
;
"use strict";
var $;
(function ($) {
    class $mol_state_time extends $mol_object {
        static task(precision, reset) {
            if (precision) {
                return new $mol_after_timeout(precision, () => this.task(precision, null));
            }
            else {
                return new $mol_after_frame(() => this.task(precision, null));
            }
        }
        static now(precision) {
            this.task(precision);
            return Date.now();
        }
    }
    __decorate([
        $mol_mem_key
    ], $mol_state_time, "task", null);
    __decorate([
        $mol_mem_key
    ], $mol_state_time, "now", null);
    $.$mol_state_time = $mol_state_time;
})($ || ($ = {}));
//mol/state/time/time.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $hyoo_game_actor extends $.$hyoo_game_actor {
            move_speed_track() {
                if (this.move_forward())
                    return this.move_speed_track_max();
                if (this.move_backward())
                    return -this.move_speed_track_max();
                return 0;
            }
            move_speed_side() {
                if (this.move_right())
                    return this.move_speed_side_max();
                if (this.move_left())
                    return -this.move_speed_side_max();
                return 0;
            }
            turn_speed() {
                if (this.turn_right())
                    return this.turn_speed_max();
                if (this.turn_left())
                    return -this.turn_speed_max();
                return 0;
            }
            auto() {
                this.$.$mol_state_time.now(0);
                const move_speed_track = this.move_speed_track();
                const move_speed_side = this.move_speed_side();
                const angle = this.angle();
                const [x, y] = this.pos();
                const rx = x + Math.cos(angle) * move_speed_side + Math.sin(angle) * move_speed_track;
                const ry = y + Math.sin(angle) * move_speed_side - Math.cos(angle) * move_speed_track;
                if (this.place_by_pos([x, y]) !== '⚫') {
                    this.pos([rx, ry]);
                }
                else if (this.place_by_pos([rx, ry]) === '⚫') {
                    this.pos([rx, ry]);
                }
                else if (this.place_by_pos([x, ry]) === '⚫') {
                    this.pos([x, ry]);
                }
                else if (this.place_by_pos([rx, y]) === '⚫') {
                    this.pos([rx, y]);
                }
                let turn_speed = this.turn_speed();
                if (move_speed_track < 0)
                    turn_speed = -turn_speed;
                this.angle(this.angle() + turn_speed);
            }
        }
        __decorate([
            $mol_mem
        ], $hyoo_game_actor.prototype, "move_speed_track", null);
        __decorate([
            $mol_mem
        ], $hyoo_game_actor.prototype, "move_speed_side", null);
        __decorate([
            $mol_mem
        ], $hyoo_game_actor.prototype, "turn_speed", null);
        __decorate([
            $mol_mem
        ], $hyoo_game_actor.prototype, "auto", null);
        $$.$hyoo_game_actor = $hyoo_game_actor;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//hyoo/game/actor/actor.view.ts
;
"use strict";
var $;
(function ($) {
    class $mol_3d_shape extends $mol_object {
        geometry() {
            return new Float32Array;
        }
        size() {
            return this.geometry().length / 3;
        }
        skin() {
            return new Float32Array(this.size() * 2);
        }
    }
    __decorate([
        $mol_memo.method
    ], $mol_3d_shape.prototype, "geometry", null);
    __decorate([
        $mol_memo.method
    ], $mol_3d_shape.prototype, "skin", null);
    $.$mol_3d_shape = $mol_3d_shape;
    class $mol_3d_shape_triangle extends $mol_3d_shape {
        geometry() {
            return new Float32Array([
                -1, -1, 0,
                +1, -1, 0,
                +0, +1, 0,
            ]);
        }
        skin() {
            return new Float32Array([
                0.0, 1,
                1.0, 1,
                0.5, 0,
            ]);
        }
    }
    __decorate([
        $mol_memo.method
    ], $mol_3d_shape_triangle.prototype, "geometry", null);
    __decorate([
        $mol_memo.method
    ], $mol_3d_shape_triangle.prototype, "skin", null);
    $.$mol_3d_shape_triangle = $mol_3d_shape_triangle;
    class $mol_3d_shape_square extends $mol_3d_shape {
        geometry() {
            return new Float32Array([
                -1, -1, 0,
                +1, -1, 0,
                -1, +1, 0,
                +1, +1, 0,
            ]);
        }
        skin() {
            return new Float32Array([
                0, 1,
                1, 1,
                0, 0,
                1, 0,
            ]);
        }
    }
    __decorate([
        $mol_memo.method
    ], $mol_3d_shape_square.prototype, "geometry", null);
    __decorate([
        $mol_memo.method
    ], $mol_3d_shape_square.prototype, "skin", null);
    $.$mol_3d_shape_square = $mol_3d_shape_square;
})($ || ($ = {}));
//mol/3d/shape/shape.ts
;
"use strict";
var $;
(function ($) {
    function $mol_wire_sync(obj) {
        return new Proxy(obj, {
            get(obj, field) {
                const val = obj[field];
                if (typeof val !== 'function')
                    return val;
                const temp = $mol_wire_task.getter(val);
                return function $mol_wire_sync(...args) {
                    const fiber = temp(obj, args);
                    return fiber.sync();
                };
            },
            apply(obj, self, args) {
                const temp = $mol_wire_task.getter(obj);
                const fiber = temp(self, args);
                return fiber.sync();
            },
        });
    }
    $.$mol_wire_sync = $mol_wire_sync;
})($ || ($ = {}));
//mol/wire/sync/sync.ts
;
"use strict";
var $;
(function ($) {
    class $mol_3d_image extends $mol_object {
        uri() {
            return 'about:blank';
        }
        load() {
            return new Promise((done, fail) => {
                const image = new Image;
                image.src = this.uri();
                image.onload = () => done(image);
                image.onerror = event => fail(event);
            });
        }
        data() {
            $mol_wire_solid();
            try {
                return $mol_wire_sync(this).load();
            }
            catch (error) {
                $mol_fail_log(error);
                return new ImageData(new Uint8ClampedArray(512 * 512 * 4), 512, 512);
            }
        }
    }
    __decorate([
        $mol_mem
    ], $mol_3d_image.prototype, "data", null);
    $.$mol_3d_image = $mol_3d_image;
})($ || ($ = {}));
//mol/3d/image/image.ts
;
"use strict";
var $;
(function ($) {
    $.$mol_3d_glsl_both = '';
    $.$mol_3d_glsl_vert = '';
    $.$mol_3d_glsl_frag = '';
})($ || ($ = {}));
//mol/3d/glsl/glsl.ts
;
"use strict";
var $;
(function ($) {
    class $mol_3d_mat4 extends Float32Array {
        static identity() {
            return new $mol_3d_mat4([
                1, 0, 0, 0,
                0, 1, 0, 0,
                0, 0, 1, 0,
                0, 0, 0, 1,
            ]);
        }
        static translation([x, y, z]) {
            return new $mol_3d_mat4([
                1, 0, 0, 0,
                0, 1, 0, 0,
                0, 0, 1, 0,
                x, y, z, 1,
            ]);
        }
        static scaling([x, y, z]) {
            return new $mol_3d_mat4([
                x, 0, 0, 0,
                0, y, 0, 0,
                0, 0, z, 0,
                0, 0, 0, 1,
            ]);
        }
        static rotation([x, y, z], angle) {
            var length = Math.hypot(x, y, z);
            x /= length;
            y /= length;
            z /= length;
            const xx = x ** 2;
            const yy = y ** 2;
            const zz = z ** 2;
            var c = Math.cos(angle);
            var s = Math.sin(angle);
            const mc = 1 - c;
            return new $mol_3d_mat4([
                xx + (1 - xx) * c,
                x * y * mc + z * s,
                x * z * mc - y * s,
                0,
                x * y * mc - z * s,
                yy + (1 - yy) * c,
                y * z * mc + x * s,
                0,
                x * z * mc + y * s,
                y * z * mc - x * s,
                zz + (1 - zz) * c,
                0,
                0, 0, 0, 1,
            ]);
        }
        static orthographic(left, right, bottom, top, near, far) {
            const rpl = right + left;
            const tpb = top + bottom;
            const npf = near + far;
            const rml = right - left;
            const tmb = top - bottom;
            const nmf = near - far;
            return new $mol_3d_mat4([
                2 / rml, 0, 0, 0,
                0, 2 / tmb, 0, 0,
                0, 0, 2 / nmf, 0,
                -rpl / rml, -tpb / tmb, npf / nmf, 1,
            ]);
        }
        static perspective(fov, aspect, near, far) {
            var f = Math.tan(Math.PI / 2 - fov / 2);
            var irange = 1.0 / (near - far);
            return new $mol_3d_mat4([
                f / aspect, 0, 0, 0,
                0, f, 0, 0,
                0, 0, (near + far) * irange, -1,
                0, 0, near * far * irange * 2, 0,
            ]);
        }
        static multiply(head, ...tail) {
            if (tail.length === 0)
                return new $mol_3d_mat4(head);
            const foot = tail.length > 1 ? this.multiply(...tail) : tail[0];
            return new $mol_3d_mat4([
                foot[0] * head[0] + foot[1] * head[4] + foot[2] * head[8] + foot[3] * head[12],
                foot[0] * head[1] + foot[1] * head[5] + foot[2] * head[9] + foot[3] * head[13],
                foot[0] * head[2] + foot[1] * head[6] + foot[2] * head[10] + foot[3] * head[14],
                foot[0] * head[3] + foot[1] * head[7] + foot[2] * head[11] + foot[3] * head[15],
                foot[4] * head[0] + foot[5] * head[4] + foot[6] * head[8] + foot[7] * head[12],
                foot[4] * head[1] + foot[5] * head[5] + foot[6] * head[9] + foot[7] * head[13],
                foot[4] * head[2] + foot[5] * head[6] + foot[6] * head[10] + foot[7] * head[14],
                foot[4] * head[3] + foot[5] * head[7] + foot[6] * head[11] + foot[7] * head[15],
                foot[8] * head[0] + foot[9] * head[4] + foot[10] * head[8] + foot[11] * head[12],
                foot[8] * head[1] + foot[9] * head[5] + foot[10] * head[9] + foot[11] * head[13],
                foot[8] * head[2] + foot[9] * head[6] + foot[10] * head[10] + foot[11] * head[14],
                foot[8] * head[3] + foot[9] * head[7] + foot[10] * head[11] + foot[11] * head[15],
                foot[12] * head[0] + foot[13] * head[4] + foot[14] * head[8] + foot[15] * head[12],
                foot[12] * head[1] + foot[13] * head[5] + foot[14] * head[9] + foot[15] * head[13],
                foot[12] * head[2] + foot[13] * head[6] + foot[14] * head[10] + foot[15] * head[14],
                foot[12] * head[3] + foot[13] * head[7] + foot[14] * head[11] + foot[15] * head[15],
            ]);
        }
        inversed() {
            const p_0 = this[10] * this[15], p_1 = this[14] * this[11], p_2 = this[6] * this[15], p_3 = this[14] * this[7];
            const p_4 = this[6] * this[11], p_5 = this[10] * this[7], p_6 = this[2] * this[15], p_7 = this[14] * this[3];
            const p_8 = this[2] * this[11], p_9 = this[10] * this[3], p10 = this[2] * this[7], p11 = this[6] * this[3];
            const p12 = this[8] * this[13], p13 = this[12] * this[9], p14 = this[4] * this[13], p15 = this[12] * this[5];
            const p16 = this[4] * this[9], p17 = this[8] * this[5], p18 = this[0] * this[13], p19 = this[12] * this[1];
            const p20 = this[0] * this[9], p21 = this[8] * this[1], p22 = this[0] * this[5], p23 = this[4] * this[1];
            const t0 = p_0 * this[5] + p_3 * this[9] + p_4 * this[13] - p_1 * this[5] - p_2 * this[9] - p_5 * this[13];
            const t1 = p_1 * this[1] + p_6 * this[9] + p_9 * this[13] - p_0 * this[1] - p_7 * this[9] - p_8 * this[13];
            const t2 = p_2 * this[1] + p_7 * this[5] + p10 * this[13] - p_3 * this[1] - p_6 * this[5] - p11 * this[13];
            const t3 = p_5 * this[1] + p_8 * this[5] + p11 * this[9] - p_4 * this[1] - p_9 * this[5] - p10 * this[9];
            const d = 1.0 / (this[0] * t0 + this[4] * t1 + this[8] * t2 + this[12] * t3);
            return new $mol_3d_mat4([
                d * t0, d * t1, d * t2, d * t3,
                d * (p_1 * this[4] + p_2 * this[8] + p_5 * this[12] - p_0 * this[4] - p_3 * this[8] - p_4 * this[12]),
                d * (p_0 * this[0] + p_7 * this[8] + p_8 * this[12] - p_1 * this[0] - p_6 * this[8] - p_9 * this[12]),
                d * (p_3 * this[0] + p_6 * this[4] + p11 * this[12] - p_2 * this[0] - p_7 * this[4] - p10 * this[12]),
                d * (p_4 * this[0] + p_9 * this[4] + p10 * this[8] - p_5 * this[0] - p_8 * this[4] - p11 * this[8]),
                d * (p12 * this[7] + p15 * this[11] + p16 * this[15] - p13 * this[7] - p14 * this[11] - p17 * this[15]),
                d * (p13 * this[3] + p18 * this[11] + p21 * this[15] - p12 * this[3] - p19 * this[11] - p20 * this[15]),
                d * (p14 * this[3] + p19 * this[7] + p22 * this[15] - p15 * this[3] - p18 * this[7] - p23 * this[15]),
                d * (p17 * this[3] + p20 * this[7] + p23 * this[11] - p16 * this[3] - p21 * this[7] - p22 * this[11]),
                d * (p14 * this[10] + p17 * this[14] + p13 * this[6] - p16 * this[14] - p12 * this[6] - p15 * this[10]),
                d * (p20 * this[14] + p12 * this[2] + p19 * this[10] - p18 * this[10] - p21 * this[14] - p13 * this[2]),
                d * (p18 * this[6] + p23 * this[14] + p15 * this[2] - p22 * this[14] - p14 * this[2] - p19 * this[6]),
                d * (p22 * this[10] + p16 * this[2] + p21 * this[6] - p20 * this[6] - p23 * this[10] - p17 * this[2]),
            ]);
        }
    }
    __decorate([
        $mol_memo.method
    ], $mol_3d_mat4.prototype, "inversed", null);
    __decorate([
        $mol_memo.method
    ], $mol_3d_mat4, "identity", null);
    $.$mol_3d_mat4 = $mol_3d_mat4;
})($ || ($ = {}));
//mol/3d/mat4/mat4.ts
;
"use strict";
var $;
(function ($) {
    $.$mol_3d_glsl_both += "// vector of scales by transformation matrix\nvec4 mol_3d_mat4_scales( in mat4 trans ) {\n\treturn vec4(\n\t\tlength( trans[0] ),\n\t\tlength( trans[1] ),\n\t\tlength( trans[2] ),\n\t\tlength( trans[3] )\n\t);\n}\n";
})($ || ($ = {}));
//mol/3d/mat4/-glsl/mat4.glsl.ts
;
"use strict";
var $;
(function ($) {
    class $mol_3d_object extends $mol_object {
        shape() {
            return $mol_3d_shape.make({});
        }
        texture() {
            return $mol_3d_image.make({});
        }
        transform() {
            return $mol_3d_mat4.identity();
        }
    }
    __decorate([
        $mol_memo.method
    ], $mol_3d_object.prototype, "shape", null);
    __decorate([
        $mol_memo.method
    ], $mol_3d_object.prototype, "texture", null);
    __decorate([
        $mol_memo.method
    ], $mol_3d_object.prototype, "transform", null);
    $.$mol_3d_object = $mol_3d_object;
})($ || ($ = {}));
//mol/3d/object/object.ts
;
"use strict";
var $;
(function ($) {
    class $hyoo_game_actor_ghost extends $hyoo_game_actor {
    }
    $.$hyoo_game_actor_ghost = $hyoo_game_actor_ghost;
})($ || ($ = {}));
//hyoo/game/actor/ghost/-view.tree/ghost.view.tree.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $hyoo_game_actor_ghost extends $.$hyoo_game_actor_ghost {
            auto() {
                this.$.$mol_state_time.now(1000);
                this.move_forward(Math.random() > .5);
                this.turn_left(Math.random() > .5);
                this.turn_right(Math.random() > .5);
                super.auto();
            }
        }
        __decorate([
            $mol_mem
        ], $hyoo_game_actor_ghost.prototype, "auto", null);
        $$.$hyoo_game_actor_ghost = $hyoo_game_actor_ghost;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//hyoo/game/actor/ghost/ghost.view.ts
;
"use strict";
var $;
(function ($) {
    class $mol_3d_texture extends $mol_object {
        api;
        native;
        constructor(api, native = api.createTexture()) {
            super();
            this.api = api;
            this.native = native;
        }
        destructor() {
            this.api.deleteTexture(this.native);
        }
        fill(color) {
            this.api.bindTexture(this.api.TEXTURE_2D, this.native);
            this.api.texImage2D(this.api.TEXTURE_2D, 0, this.api.RGBA, 1, 1, 0, this.api.RGBA, this.api.UNSIGNED_BYTE, color);
            return color;
        }
        send_one(data) {
            this.api.bindTexture(this.api.TEXTURE_2D, this.native);
            this.api.texImage2D(this.api.TEXTURE_2D, 0, this.api.RGBA, this.api.RGBA, this.api.UNSIGNED_BYTE, data);
            this.api.texParameteri(this.api.TEXTURE_2D, this.api.TEXTURE_MIN_FILTER, this.api.LINEAR_MIPMAP_LINEAR);
            this.api.texParameteri(this.api.TEXTURE_2D, this.api.TEXTURE_MAG_FILTER, this.api.LINEAR);
            this.api.generateMipmap(this.api.TEXTURE_2D);
            return data;
        }
        send_multi(data) {
            this.api.bindTexture(this.api.TEXTURE_2D_ARRAY, this.native);
            const size = data[0].width;
            this.api.texImage3D(this.api.TEXTURE_2D_ARRAY, 0, this.api.RGBA, size, size, data.length, 0, this.api.RGBA, this.api.UNSIGNED_BYTE, null);
            for (let i = 0; i < data.length; ++i) {
                this.api.texSubImage3D(this.api.TEXTURE_2D_ARRAY, 0, 0, 0, i, size, size, 1, this.api.RGBA, this.api.UNSIGNED_BYTE, data[i]);
            }
            const anisotropic = this.api.getExtension('EXT_texture_filter_anisotropic');
            const max = this.api.getParameter(anisotropic.MAX_TEXTURE_MAX_ANISOTROPY_EXT);
            this.api.texParameterf(this.api.TEXTURE_2D_ARRAY, anisotropic.TEXTURE_MAX_ANISOTROPY_EXT, max);
            this.api.texParameteri(this.api.TEXTURE_2D_ARRAY, this.api.TEXTURE_MIN_FILTER, this.api.LINEAR_MIPMAP_LINEAR);
            this.api.texParameteri(this.api.TEXTURE_2D_ARRAY, this.api.TEXTURE_MAG_FILTER, this.api.LINEAR);
            this.api.pixelStorei(this.api.UNPACK_PREMULTIPLY_ALPHA_WEBGL, true);
            this.api.blendFunc(this.api.ONE, this.api.ONE_MINUS_SRC_ALPHA);
            this.api.generateMipmap(this.api.TEXTURE_2D_ARRAY);
            return data;
        }
    }
    $.$mol_3d_texture = $mol_3d_texture;
})($ || ($ = {}));
//mol/3d/texture/texture.ts
;
"use strict";
var $;
(function ($) {
    class $mol_3d_glob extends Object {
        api;
        location;
        constructor(api, location) {
            super();
            this.api = api;
            this.location = location;
        }
        vector_int(data, offset = 0, length = data.length - offset) {
            switch (length) {
                case 4:
                    this.api.uniform4iv(this.location, data, offset, length);
                    break;
                case 3:
                    this.api.uniform3iv(this.location, data, offset, length);
                    break;
                case 2:
                    this.api.uniform2iv(this.location, data, offset, length);
                    break;
                case 1:
                    this.api.uniform1iv(this.location, data, offset, length);
                    break;
                default: throw new Error(`Wrong matrix data length (${length})`);
            }
            return data;
        }
        vector_uint(data, offset = 0, length = data.length - offset) {
            switch (length) {
                case 4:
                    this.api.uniform4uiv(this.location, data, offset, length);
                    break;
                case 3:
                    this.api.uniform3uiv(this.location, data, offset, length);
                    break;
                case 2:
                    this.api.uniform2uiv(this.location, data, offset, length);
                    break;
                case 1:
                    this.api.uniform1uiv(this.location, data, offset, length);
                    break;
                default: throw new Error(`Wrong matrix data length (${length})`);
            }
            return data;
        }
        vector_float(data, offset = 0, length = data.length - offset) {
            switch (length) {
                case 4:
                    this.api.uniform4fv(this.location, data, offset, length);
                    break;
                case 3:
                    this.api.uniform3fv(this.location, data, offset, length);
                    break;
                case 2:
                    this.api.uniform2fv(this.location, data, offset, length);
                    break;
                case 1:
                    this.api.uniform1fv(this.location, data, offset, length);
                    break;
                default: throw new Error(`Wrong matrix data length (${length})`);
            }
            return data;
        }
        matrix(data, transpose = false, offset = 0, length = data.length - offset) {
            switch (length) {
                case 16:
                    this.api.uniformMatrix4fv(this.location, transpose, data, offset, length);
                    break;
                case 12:
                    this.api.uniformMatrix4x3fv(this.location, transpose, data, offset, length);
                    break;
                case 9:
                    this.api.uniformMatrix3fv(this.location, transpose, data, offset, length);
                    break;
                case 8:
                    this.api.uniformMatrix4x2fv(this.location, transpose, data, offset, length);
                    break;
                case 6:
                    this.api.uniformMatrix3x2fv(this.location, transpose, data, offset, length);
                    break;
                case 2:
                    this.api.uniformMatrix2fv(this.location, transpose, data, offset, length);
                    break;
                default: throw new Error(`Wrong matrix data length (${length})`);
            }
            return data;
        }
        texture() {
            return new $mol_3d_texture(this.api);
        }
    }
    __decorate([
        $mol_mem
    ], $mol_3d_glob.prototype, "texture", null);
    $.$mol_3d_glob = $mol_3d_glob;
})($ || ($ = {}));
//mol/3d/glob/glob.ts
;
"use strict";
var $;
(function ($) {
    class $mol_3d_buffer extends Object {
        api;
        native;
        constructor(api, native) {
            super();
            this.api = api;
            this.native = native;
        }
        send(data) {
            this.api.bindBuffer(this.api.ARRAY_BUFFER, this.native);
            const size = data.reduce((sum, buf) => sum + buf.byteLength, 0);
            this.api.bufferData(this.api.ARRAY_BUFFER, size, this.api.DYNAMIC_DRAW);
            let offset = 0;
            for (let buf of data) {
                this.api.bufferSubData(this.api.ARRAY_BUFFER, offset, buf, 0);
                offset += buf.byteLength;
            }
            return data;
        }
    }
    $.$mol_3d_buffer = $mol_3d_buffer;
})($ || ($ = {}));
//mol/3d/buffer/buffer.ts
;
"use strict";
var $;
(function ($) {
    const float_size = 4;
    class $mol_3d_param extends Object {
        api;
        location;
        constructor(api, location) {
            super();
            this.api = api;
            this.location = location;
        }
        vector(vals) {
            const buffer = this.api.createBuffer();
            this.api.bindBuffer(this.api.ARRAY_BUFFER, buffer);
            this.api.enableVertexAttribArray(this.location);
            this.api.vertexAttribPointer(this.location, vals, this.api.FLOAT, false, 0, 0);
            return new $mol_3d_buffer(this.api, buffer);
        }
        vectors(vals) {
            const buffer = this.api.createBuffer();
            this.api.bindBuffer(this.api.ARRAY_BUFFER, buffer);
            this.api.enableVertexAttribArray(this.location);
            this.api.vertexAttribPointer(this.location, vals, this.api.FLOAT, false, 0, 0);
            this.api.vertexAttribDivisor(this.location, 1);
            return new $mol_3d_buffer(this.api, buffer);
        }
        vectors_byte(vals) {
            const buffer = this.api.createBuffer();
            this.api.bindBuffer(this.api.ARRAY_BUFFER, buffer);
            this.api.enableVertexAttribArray(this.location);
            this.api.vertexAttribPointer(this.location, vals, this.api.UNSIGNED_BYTE, false, 0, 0);
            this.api.vertexAttribDivisor(this.location, 1);
            return new $mol_3d_buffer(this.api, buffer);
        }
        vectors_uint(vals) {
            const buffer = this.api.createBuffer();
            this.api.bindBuffer(this.api.ARRAY_BUFFER, buffer);
            this.api.enableVertexAttribArray(this.location);
            this.api.vertexAttribPointer(this.location, vals, this.api.UNSIGNED_INT, false, 0, 0);
            this.api.vertexAttribDivisor(this.location, 1);
            return new $mol_3d_buffer(this.api, buffer);
        }
        matrix([cols, rows]) {
            const matrix_size = rows * cols * float_size;
            const buffer = this.api.createBuffer();
            this.api.bindBuffer(this.api.ARRAY_BUFFER, buffer);
            for (let row = 0; row < rows; ++row) {
                const loc = this.location + row;
                const offset = row * cols * float_size;
                this.api.enableVertexAttribArray(loc);
                this.api.vertexAttribPointer(loc, cols, this.api.FLOAT, false, matrix_size, offset);
            }
            return new $mol_3d_buffer(this.api, buffer);
        }
        matrices([cols, rows]) {
            const matrix_size = rows * cols * float_size;
            const buffer = this.api.createBuffer();
            this.api.bindBuffer(this.api.ARRAY_BUFFER, buffer);
            for (let row = 0; row < rows; ++row) {
                const loc = this.location + row;
                const offset = row * cols * float_size;
                this.api.enableVertexAttribArray(loc);
                this.api.vertexAttribPointer(loc, cols, this.api.FLOAT, false, matrix_size, offset);
                this.api.vertexAttribDivisor(loc, 1);
            }
            return new $mol_3d_buffer(this.api, buffer);
        }
    }
    __decorate([
        $mol_mem_key
    ], $mol_3d_param.prototype, "vector", null);
    __decorate([
        $mol_mem_key
    ], $mol_3d_param.prototype, "vectors", null);
    __decorate([
        $mol_mem_key
    ], $mol_3d_param.prototype, "vectors_byte", null);
    __decorate([
        $mol_mem_key
    ], $mol_3d_param.prototype, "vectors_uint", null);
    __decorate([
        $mol_mem_key
    ], $mol_3d_param.prototype, "matrix", null);
    __decorate([
        $mol_mem_key
    ], $mol_3d_param.prototype, "matrices", null);
    $.$mol_3d_param = $mol_3d_param;
})($ || ($ = {}));
//mol/3d/param/param.ts
;
"use strict";
var $;
(function ($) {
    class $mol_3d_geometry extends Object {
        api;
        vertexes;
        constructor(api, vertexes = api.createVertexArray()) {
            super();
            this.api = api;
            this.vertexes = vertexes;
        }
        destructor() {
            this.api.deleteVertexArray(this.vertexes);
        }
        size = 0;
        count = 1;
        use(task) {
            try {
                this.api.bindVertexArray(this.vertexes);
                task(this);
                return this;
            }
            finally {
                this.api.bindVertexArray(null);
            }
        }
    }
    $.$mol_3d_geometry = $mol_3d_geometry;
})($ || ($ = {}));
//mol/3d/geometry/geometry.ts
;
"use strict";
var $;
(function ($) {
    class $mol_3d_program extends Object {
        api;
        native;
        constructor(api, native) {
            api.enable(api.CULL_FACE);
            api.enable(api.DEPTH_TEST);
            api.enable(api.SCISSOR_TEST);
            api.enable(api.BLEND);
            super();
            this.api = api;
            this.native = native;
        }
        glob(name) {
            const location = this.api.getUniformLocation(this.native, name);
            return new $mol_3d_glob(this.api, location);
        }
        param(name) {
            const location = this.api.getAttribLocation(this.native, name);
            if (location === -1)
                return null;
            return new $mol_3d_param(this.api, location);
        }
        geometry(id) {
            return new $mol_3d_geometry(this.api);
        }
        use(task) {
            try {
                this.api.useProgram(this.native);
                task(this);
                return this;
            }
            finally {
                this.api.useProgram(null);
            }
        }
        point(size, offset = 0) {
            this.api.drawArrays(this.api.POINTS, offset, size);
        }
        line(size, offset = 0) {
            this.api.drawArrays(this.api.LINES, offset, size);
        }
        triangle(size, offset = 0) {
            this.api.drawArrays(this.api.TRIANGLES, offset, size);
        }
        strip(size, offset = 0) {
            this.api.drawArrays(this.api.TRIANGLE_STRIP, offset, size);
        }
        points(first, vertices, instances = 1) {
            this.api.drawArraysInstanced(this.api.POINTS, first, vertices, instances);
        }
        lines(first, vertices, instances = 1) {
            this.api.drawArraysInstanced(this.api.LINE_STRIP, first, vertices, instances);
        }
        strips(first, vertices, instances = 1) {
            this.api.drawArraysInstanced(this.api.TRIANGLE_STRIP, first, vertices, instances);
        }
    }
    __decorate([
        $mol_mem_key
    ], $mol_3d_program.prototype, "glob", null);
    __decorate([
        $mol_mem_key
    ], $mol_3d_program.prototype, "geometry", null);
    $.$mol_3d_program = $mol_3d_program;
})($ || ($ = {}));
//mol/3d/program/program.ts
;
"use strict";
var $;
(function ($) {
    class $mol_3d_context extends Object {
        native;
        constructor(native) {
            super();
            this.native = native;
        }
        shader(type, code) {
            const gl = this.native;
            const shader = gl.createShader(type);
            gl.shaderSource(shader, code);
            gl.compileShader(shader);
            const ok = gl.getShaderParameter(shader, gl.COMPILE_STATUS);
            if (ok)
                return shader;
            const log = gl.getShaderInfoLog(shader);
            gl.deleteShader(shader);
            throw new Error(String(log));
        }
        func(name, face) {
            return this.program(face, $mol_3d_glsl_both + $mol_3d_glsl_vert + `void main() { ${name}(); }`, $mol_3d_glsl_both + $mol_3d_glsl_frag + `void main() { ${name}(); }`);
        }
        program(face, vertex, fragment) {
            const gl = this.native;
            const program = gl.createProgram();
            const prefix = `#version 300 es
				precision highp float;
				precision highp sampler2D;
				precision highp sampler2DArray;
			`;
            let revert = prefix;
            let refrag = prefix;
            for (const name in face.glob ?? {}) {
                revert += `uniform ${face.glob[name]} ${name};\n`;
                refrag += `uniform ${face.glob[name]} ${name};\n`;
            }
            for (const name in face.input ?? {}) {
                revert += `in ${face.input[name]} ${name};\n`;
            }
            for (const name in face.pipe ?? {}) {
                revert += `out ${face.pipe[name]} ${name};\n`;
                refrag += `in ${face.pipe[name]} ${name};\n`;
            }
            for (const name in face.output ?? {}) {
                refrag += `out ${face.output[name]} ${name};\n`;
            }
            gl.attachShader(program, this.shader(gl.VERTEX_SHADER, revert + vertex));
            gl.attachShader(program, this.shader(gl.FRAGMENT_SHADER, refrag + fragment));
            gl.linkProgram(program);
            var ok = gl.getProgramParameter(program, gl.LINK_STATUS);
            if (ok)
                return new $mol_3d_program(this.native, program);
            const log = gl.getProgramInfoLog(program);
            gl.deleteProgram(program);
            throw new Error(String(log));
        }
    }
    $.$mol_3d_context = $mol_3d_context;
})($ || ($ = {}));
//mol/3d/context/context.ts
;
"use strict";
var $;
(function ($) {
    class $mol_3d_pane extends $mol_view {
        dom_name() {
            return "canvas";
        }
        context() {
            const obj = new this.$.$mol_3d_context(this.context_native());
            return obj;
        }
        field() {
            return {
                ...super.field(),
                width: this.width(),
                height: this.height()
            };
        }
        paint() {
            return null;
        }
        context_native() {
            const obj = new this.$.WebGL2RenderingContext();
            return obj;
        }
        width() {
            return 0;
        }
        height() {
            return 0;
        }
    }
    __decorate([
        $mol_mem
    ], $mol_3d_pane.prototype, "context", null);
    __decorate([
        $mol_mem
    ], $mol_3d_pane.prototype, "context_native", null);
    $.$mol_3d_pane = $mol_3d_pane;
})($ || ($ = {}));
//mol/3d/pane/-view.tree/pane.view.tree.ts
;
"use strict";
//mol/type/override/override.ts
;
"use strict";
//mol/style/properties/properties.ts
;
"use strict";
//mol/style/pseudo/class.ts
;
"use strict";
//mol/style/pseudo/element.ts
;
"use strict";
//mol/type/error/error.ts
;
"use strict";
//mol/style/guard/guard.ts
;
"use strict";
var $;
(function ($) {
    function $mol_style_sheet(Component, config0) {
        let rules = [];
        const block = $mol_dom_qname($mol_ambient({}).$mol_func_name(Component));
        const kebab = (name) => name.replace(/[A-Z]/g, letter => '-' + letter.toLowerCase());
        const make_class = (prefix, path, config) => {
            const props = [];
            const selector = (prefix, path) => {
                if (path.length === 0)
                    return prefix || `[${block}]`;
                let res = `[${block}_${path.join('_')}]`;
                if (prefix)
                    res = prefix + ' :where(' + res + ')';
                return res;
            };
            for (const key of Object.keys(config).reverse()) {
                if (/^[a-z]/.test(key)) {
                    const addProp = (keys, val) => {
                        if (Array.isArray(val)) {
                            if (val[0] && [Array, Object].includes(val[0].constructor)) {
                                val = val.map(v => {
                                    return Object.entries(v).map(([n, a]) => {
                                        if (a === true)
                                            return kebab(n);
                                        if (a === false)
                                            return null;
                                        return String(a);
                                    }).filter(Boolean).join(' ');
                                }).join(',');
                            }
                            else {
                                val = val.join(' ');
                            }
                            props.push(`\t${keys.join('-')}: ${val};\n`);
                        }
                        else if (val.constructor === Object) {
                            for (let suffix in val) {
                                addProp([...keys, kebab(suffix)], val[suffix]);
                            }
                        }
                        else {
                            props.push(`\t${keys.join('-')}: ${val};\n`);
                        }
                    };
                    addProp([kebab(key)], config[key]);
                }
                else if (/^[A-Z]/.test(key)) {
                    make_class(prefix, [...path, key.toLowerCase()], config[key]);
                }
                else if (key[0] === '$') {
                    make_class(selector(prefix, path) + ' :where([' + $mol_dom_qname(key) + '])', [], config[key]);
                }
                else if (key === '>') {
                    const types = config[key];
                    for (let type in types) {
                        make_class(selector(prefix, path) + ' > :where([' + $mol_dom_qname(type) + '])', [], types[type]);
                    }
                }
                else if (key === '@') {
                    const attrs = config[key];
                    for (let name in attrs) {
                        for (let val in attrs[name]) {
                            make_class(selector(prefix, path) + ':where([' + name + '=' + JSON.stringify(val) + '])', [], attrs[name][val]);
                        }
                    }
                }
                else if (key === '@media') {
                    const media = config[key];
                    for (let query in media) {
                        rules.push('}\n');
                        make_class(prefix, path, media[query]);
                        rules.push(`${key} ${query} {\n`);
                    }
                }
                else {
                    make_class(selector(prefix, path) + key, [], config[key]);
                }
            }
            if (props.length) {
                rules.push(`${selector(prefix, path)} {\n${props.reverse().join('')}}\n`);
            }
        };
        make_class('', [], config0);
        return rules.reverse().join('');
    }
    $.$mol_style_sheet = $mol_style_sheet;
})($ || ($ = {}));
//mol/style/sheet/sheet.ts
;
"use strict";
var $;
(function ($) {
    function $mol_style_define(Component, config) {
        return $mol_style_attach(Component.name, $mol_style_sheet(Component, config));
    }
    $.$mol_style_define = $mol_style_define;
})($ || ($ = {}));
//mol/style/define/define.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_3d_pane extends $.$mol_3d_pane {
            context() {
                const canvas = this.dom_node();
                let context = canvas.getContext('webgl2');
                return new $mol_3d_context(context);
            }
            width() {
                return Math.ceil((this.view_rect()?.width ?? 0) * this.$.$mol_dom_context.devicePixelRatio);
            }
            height() {
                return Math.ceil((this.view_rect()?.height ?? 0) * this.$.$mol_dom_context.devicePixelRatio);
            }
            viewport() {
                const viewport = [0, 0, this.width(), this.height()];
                this.context().native.viewport(...viewport);
                return viewport;
            }
            scissor() {
                const scissor = this.viewport();
                this.context().native.scissor(...scissor);
                return scissor;
            }
            render() {
                super.render();
                this.viewport();
                this.scissor();
                this.paint();
            }
        }
        __decorate([
            $mol_mem
        ], $mol_3d_pane.prototype, "context", null);
        __decorate([
            $mol_mem
        ], $mol_3d_pane.prototype, "width", null);
        __decorate([
            $mol_mem
        ], $mol_3d_pane.prototype, "height", null);
        __decorate([
            $mol_mem
        ], $mol_3d_pane.prototype, "viewport", null);
        __decorate([
            $mol_mem
        ], $mol_3d_pane.prototype, "scissor", null);
        $$.$mol_3d_pane = $mol_3d_pane;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//mol/3d/pane/pane.view.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        $mol_style_define($mol_3d_pane, {
            alignSelf: 'stretch',
            justifySelf: 'stretch',
            flex: {
                grow: 1,
                shrink: 1,
            },
        });
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//mol/3d/pane/pane.view.css.ts
;
"use strict";
var $;
(function ($) {
    class $hyoo_game_eye extends $mol_3d_pane {
        objects() {
            return [];
        }
        Realm() {
            const obj = new this.$.$hyoo_game_realm();
            return obj;
        }
        pos(next) {
            if (next !== undefined)
                return next;
            return [
                0,
                0
            ];
        }
        angle(next) {
            if (next !== undefined)
                return next;
            return 1;
        }
        wireframe() {
            return false;
        }
    }
    __decorate([
        $mol_mem
    ], $hyoo_game_eye.prototype, "Realm", null);
    __decorate([
        $mol_mem
    ], $hyoo_game_eye.prototype, "pos", null);
    __decorate([
        $mol_mem
    ], $hyoo_game_eye.prototype, "angle", null);
    $.$hyoo_game_eye = $hyoo_game_eye;
})($ || ($ = {}));
//hyoo/game/eye/-view.tree/eye.view.tree.ts
;
"use strict";
var $;
(function ($) {
    function $mol_wire_race(...tasks) {
        const results = tasks.map(task => {
            try {
                return task();
            }
            catch (error) {
                return error;
            }
        });
        const promises = results.filter(res => res instanceof Promise);
        if (promises.length)
            $mol_fail(Promise.race(promises));
        const error = results.find(res => res instanceof Error);
        if (error)
            $mol_fail(error);
        return results;
    }
    $.$mol_wire_race = $mol_wire_race;
})($ || ($ = {}));
//mol/wire/race/race.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $hyoo_game_eye extends $.$hyoo_game_eye {
            program() {
                return this.context().func('hyoo_game_eye', {
                    glob: {
                        wireframe: 'float',
                        projTrans: 'mat4',
                        viewTrans: 'mat4',
                        textures: 'sampler2DArray',
                    },
                    input: {
                        vertexCoord: 'vec4',
                        texOffset: 'vec2',
                        instTrans: 'mat4',
                        instTex: 'float',
                    },
                    pipe: {
                        worldPos: 'vec4',
                        viewPos: 'vec4',
                        texId: 'float',
                        textPos: 'vec2',
                        texScale: 'vec2',
                        instId: 'float',
                        vertexId: 'float',
                    },
                    output: {
                        color: 'vec4',
                    },
                });
            }
            proj_matrix() {
                let aspect = this.width() / this.height();
                if (!Number.isFinite(aspect))
                    aspect = 1;
                return $mol_3d_mat4.perspective(Math.PI / 2, aspect, 0.0001, 50);
            }
            view_matrix() {
                const map_width = this.Realm().map_width();
                const map_height = this.Realm().map_height();
                const [x, y] = this.pos();
                const a = this.angle();
                return $mol_3d_mat4.multiply($mol_3d_mat4.rotation([1, 0, 0], -Math.PI / 2), $mol_3d_mat4.rotation([0, 0, 1], a), $mol_3d_mat4.scaling([1, 1, 1]), $mol_3d_mat4.translation([-x, y, .25]));
            }
            groups() {
                const groups = new Map();
                for (const obj of this.objects()) {
                    let list = groups.get(obj.shape());
                    if (list)
                        list.push(obj);
                    else
                        groups.set(obj.shape(), [obj]);
                }
                return groups;
            }
            group_textures(shape) {
                const program = this.program();
                const objects = this.groups().get(shape);
                const ids = new Array(objects.length);
                const map = this.texture_map();
                for (let i = 0; i < objects.length; ++i) {
                    ids[i] = new Float32Array([map.get(objects[i].texture())]);
                }
                program.geometry(shape).use(geometry => {
                    program.param('instTex').vectors(1).send(ids);
                });
                return ids;
            }
            group_trans(shape) {
                const program = this.program();
                const objects = this.groups().get(shape);
                return program.geometry(shape).use(geometry => {
                    return program.param('instTrans').matrices([4, 4]).send(objects.map(obj => obj.transform()));
                });
            }
            group_skin(shape) {
                const program = this.program();
                program.geometry(shape).use(geometry => {
                    program.param('texOffset').vector(2).send([shape.skin()]);
                });
            }
            group_vertex(shape) {
                const program = this.program();
                program.geometry(shape).use(geometry => {
                    program.param('vertexCoord').vector(3).send([shape.geometry()]);
                });
            }
            prepare_group(shape) {
                const program = this.program();
                this.group_skin(shape);
                this.group_textures(shape);
                this.group_trans(shape);
                this.group_vertex(shape);
                return program.geometry(shape).use(geometry => {
                    geometry.size = shape.size();
                    geometry.count = this.groups().get(shape).length;
                });
            }
            prepare() {
                return new Map([...this.groups().keys()].map(shape => [shape, this.prepare_group(shape)]));
            }
            texture_map() {
                const map = new Map();
                for (const obj of this.objects()) {
                    const texture = obj.texture();
                    const index = map.get(texture);
                    if (index !== undefined)
                        continue;
                    map.set(texture, map.size);
                }
                return map;
            }
            textures() {
                const textures = $mol_wire_race(...[...this.texture_map().keys()].map(image => () => image.data()));
                return this.program().glob('textures').texture().send_multi(textures);
            }
            paint() {
                this.program().use(program => {
                    this.textures();
                    program.glob('projTrans').matrix(this.proj_matrix());
                    program.glob('viewTrans').matrix(this.view_matrix());
                    for (const [shape, geometry] of this.prepare().entries()) {
                        geometry.use(() => {
                            program.strips(0, shape.size(), geometry.count);
                            if (this.wireframe()) {
                                program.glob('wireframe').vector_float([1]);
                                program.lines(0, shape.size(), geometry.count);
                                program.points(0, shape.size(), geometry.count);
                                program.glob('wireframe').vector_float([0]);
                            }
                        });
                    }
                });
            }
        }
        __decorate([
            $mol_mem
        ], $hyoo_game_eye.prototype, "program", null);
        __decorate([
            $mol_mem
        ], $hyoo_game_eye.prototype, "proj_matrix", null);
        __decorate([
            $mol_mem
        ], $hyoo_game_eye.prototype, "view_matrix", null);
        __decorate([
            $mol_mem
        ], $hyoo_game_eye.prototype, "groups", null);
        __decorate([
            $mol_mem_key
        ], $hyoo_game_eye.prototype, "group_textures", null);
        __decorate([
            $mol_mem_key
        ], $hyoo_game_eye.prototype, "group_skin", null);
        __decorate([
            $mol_mem_key
        ], $hyoo_game_eye.prototype, "group_vertex", null);
        __decorate([
            $mol_mem
        ], $hyoo_game_eye.prototype, "texture_map", null);
        __decorate([
            $mol_mem
        ], $hyoo_game_eye.prototype, "textures", null);
        $$.$hyoo_game_eye = $hyoo_game_eye;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//hyoo/game/eye/eye.view.ts
;
"use strict";
var $;
(function ($) {
    $.$mol_3d_glsl_frag += "void hyoo_game_eye() {\n\t\n\tfloat dim = min( 1.0, 3.0 / pow( length( viewPos ), 2.0 ) );\n\t\n\tif( wireframe == 1.0 ) {\n\t\t\n\t\tcolor = dim * vec4( 1, 1, 1, 1 );\n\t\t\n\t} else {\n\t\t\n\t\tvec3 coord = vec3( textPos * texScale, round(texId) );\n\t\t\n\t\tcolor = texture( textures, coord );\n\t\tcolor = vec4( color.rgb * dim, color.a );\n\t\t\n\t}\n\t\n}\n";
})($ || ($ = {}));
//hyoo/game/eye/-glsl/eye.frag.glsl.ts
;
"use strict";
var $;
(function ($) {
    $.$mol_3d_glsl_vert += "void hyoo_game_eye() {\n\t\n\tvec4 viewShift = vec4( 0, 0, - wireframe * 0.01, 0 );\n\t\n\tworldPos = instTrans * vertexCoord;\n\tviewPos = viewTrans * worldPos;\n\t\n\tgl_Position = projTrans * viewPos + viewShift;\n\tgl_PointSize = 5.0;\n\t\n\ttexId = float( instTex );\n\ttextPos = texOffset;\n\t\n\tinstId = float( gl_InstanceID );\n\tvertexId = float( gl_VertexID );\n\t\n\ttexScale = 2.0 * mol_3d_mat4_scales( instTrans ).xy;\n\t\n}\n";
})($ || ($ = {}));
//hyoo/game/eye/-glsl/eye.vert.glsl.ts
;
"use strict";
var $;
(function ($) {
    class $mol_video_player extends $mol_view {
        dom_name() {
            return "video";
        }
        playing(val) {
            if (val !== undefined)
                return val;
            return false;
        }
        volume(val) {
            if (val !== undefined)
                return val;
            return 0;
        }
        time(val) {
            if (val !== undefined)
                return val;
            return 0;
        }
        duration() {
            return 0;
        }
        attr() {
            return {
                src: this.uri(),
                controls: this.controls(),
                autoplay: this.autoplay(),
                loop: this.loop(),
                poster: this.poster()
            };
        }
        event() {
            return {
                volumechange: (event) => this.revolume(event),
                timeupdate: (event) => this.retime(event),
                durationchange: (event) => this.redurate(event),
                playing: (event) => this.play_started(event),
                play: (event) => this.play(event),
                pause: (event) => this.pause(event)
            };
        }
        uri() {
            return "";
        }
        controls() {
            return true;
        }
        autoplay() {
            return true;
        }
        loop() {
            return false;
        }
        poster() {
            return "";
        }
        revolume(event) {
            if (event !== undefined)
                return event;
            return null;
        }
        retime(event) {
            if (event !== undefined)
                return event;
            return null;
        }
        redurate(event) {
            if (event !== undefined)
                return event;
            return null;
        }
        play_started(event) {
            if (event !== undefined)
                return event;
            return null;
        }
        play(event) {
            if (event !== undefined)
                return event;
            return null;
        }
        pause(event) {
            if (event !== undefined)
                return event;
            return null;
        }
    }
    __decorate([
        $mol_mem
    ], $mol_video_player.prototype, "playing", null);
    __decorate([
        $mol_mem
    ], $mol_video_player.prototype, "volume", null);
    __decorate([
        $mol_mem
    ], $mol_video_player.prototype, "time", null);
    __decorate([
        $mol_mem
    ], $mol_video_player.prototype, "revolume", null);
    __decorate([
        $mol_mem
    ], $mol_video_player.prototype, "retime", null);
    __decorate([
        $mol_mem
    ], $mol_video_player.prototype, "redurate", null);
    __decorate([
        $mol_mem
    ], $mol_video_player.prototype, "play_started", null);
    __decorate([
        $mol_mem
    ], $mol_video_player.prototype, "play", null);
    __decorate([
        $mol_mem
    ], $mol_video_player.prototype, "pause", null);
    $.$mol_video_player = $mol_video_player;
})($ || ($ = {}));
//mol/video/player/-view.tree/player.view.tree.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_video_player extends $.$mol_video_player {
            dom_node() {
                return super.dom_node();
            }
            volume(next) {
                this.revolume();
                if (next === undefined) {
                    return this.dom_node().volume;
                }
                else {
                    return this.dom_node().volume = Math.max(0, Math.min(next, 1));
                }
            }
            time(next) {
                this.retime();
                if (next === undefined) {
                    return this.dom_node().currentTime;
                }
                else {
                    return this.dom_node().currentTime = Math.max(0, Math.min(next, this.duration()));
                }
            }
            duration() {
                this.redurate();
                return this.dom_node().duration;
            }
            playing(next) {
                if (next === undefined) {
                    return false;
                }
                else {
                    if (next) {
                        this.dom_node().play();
                    }
                    else {
                        this.dom_node().pause();
                    }
                    return next;
                }
            }
            play() {
                this.playing(true);
            }
            pause() {
                this.playing(false);
            }
        }
        __decorate([
            $mol_mem
        ], $mol_video_player.prototype, "volume", null);
        __decorate([
            $mol_mem
        ], $mol_video_player.prototype, "time", null);
        __decorate([
            $mol_mem
        ], $mol_video_player.prototype, "duration", null);
        __decorate([
            $mol_mem
        ], $mol_video_player.prototype, "playing", null);
        $$.$mol_video_player = $mol_video_player;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//mol/video/player/player.view.ts
;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/video/player/player.view.css", "[mol_video_player] {\n\tflex: 1 1 auto;\n}\n");
})($ || ($ = {}));
//mol/video/player/-css/player.view.css.ts
;
"use strict";
var $;
(function ($) {
    class $mol_speck extends $mol_view {
        attr() {
            return {
                ...super.attr(),
                mol_theme: this.theme()
            };
        }
        style() {
            return {
                ...super.style(),
                minHeight: "1em"
            };
        }
        sub() {
            return [
                this.value()
            ];
        }
        theme() {
            return "$mol_theme_accent";
        }
        value() {
            return null;
        }
    }
    $.$mol_speck = $mol_speck;
})($ || ($ = {}));
//mol/speck/-view.tree/speck.view.tree.ts
;
"use strict";
var $;
(function ($) {
    const { vary } = $mol_style_func;
    $.$mol_layer = {
        hover: vary('--mol_layer_hover'),
        focus: vary('--mol_layer_focus'),
        speck: vary('--mol_layer_speck'),
        float: vary('--mol_layer_float'),
        popup: vary('--mol_layer_popup'),
    };
})($ || ($ = {}));
//mol/layer/layer.ts
;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/layer/layer.css", ":root {\n\t--mol_layer_hover: 1;\n\t--mol_layer_focus: 2;\n\t--mol_layer_speck: 3;\n\t--mol_layer_float: 4;\n\t--mol_layer_popup: 5;\n}\n");
})($ || ($ = {}));
//mol/layer/-css/layer.css.ts
;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/speck/speck.view.css", "[mol_speck] {\n\tfont-size: .625rem;\n\tborder-radius: 1rem;\n\tmargin: -0.5rem -0.25rem;\n\talign-self: flex-start;\n\tmin-height: 1em;\n\tmin-width: .5em;\n\tvertical-align: sub;\n\tpadding: .25em .5em;\n\tposition: absolute;\n\tz-index: var(--mol_layer_speck);\n\ttext-align: center;\n\tline-height: 1;\n\tdisplay: inline-block;\n\twhite-space: nowrap;\n\ttext-overflow: ellipsis;\n\tuser-select: none;\n}\n");
})($ || ($ = {}));
//mol/speck/-css/speck.view.css.ts
;
"use strict";
var $;
(function ($) {
    class $mol_button extends $mol_view {
        enabled() {
            return true;
        }
        click(event) {
            if (event !== undefined)
                return event;
            return null;
        }
        event_click(event) {
            if (event !== undefined)
                return event;
            return null;
        }
        event() {
            return {
                ...super.event(),
                click: (event) => this.event_activate(event),
                dblclick: (event) => this.clicks(event),
                keydown: (event) => this.event_key_press(event)
            };
        }
        attr() {
            return {
                ...super.attr(),
                disabled: this.disabled(),
                role: "button",
                tabindex: this.tab_index(),
                title: this.hint_safe()
            };
        }
        sub() {
            return [
                this.title()
            ];
        }
        Speck() {
            const obj = new this.$.$mol_speck();
            obj.value = () => this.error();
            return obj;
        }
        event_activate(event) {
            if (event !== undefined)
                return event;
            return null;
        }
        clicks(event) {
            if (event !== undefined)
                return event;
            return null;
        }
        event_key_press(event) {
            if (event !== undefined)
                return event;
            return null;
        }
        disabled() {
            return false;
        }
        tab_index() {
            return 0;
        }
        hint() {
            return "";
        }
        hint_safe() {
            return this.hint();
        }
        error() {
            return "";
        }
    }
    __decorate([
        $mol_mem
    ], $mol_button.prototype, "click", null);
    __decorate([
        $mol_mem
    ], $mol_button.prototype, "event_click", null);
    __decorate([
        $mol_mem
    ], $mol_button.prototype, "Speck", null);
    __decorate([
        $mol_mem
    ], $mol_button.prototype, "event_activate", null);
    __decorate([
        $mol_mem
    ], $mol_button.prototype, "clicks", null);
    __decorate([
        $mol_mem
    ], $mol_button.prototype, "event_key_press", null);
    $.$mol_button = $mol_button;
})($ || ($ = {}));
//mol/button/-view.tree/button.view.tree.ts
;
"use strict";
var $;
(function ($) {
    let $mol_keyboard_code;
    (function ($mol_keyboard_code) {
        $mol_keyboard_code[$mol_keyboard_code["backspace"] = 8] = "backspace";
        $mol_keyboard_code[$mol_keyboard_code["tab"] = 9] = "tab";
        $mol_keyboard_code[$mol_keyboard_code["enter"] = 13] = "enter";
        $mol_keyboard_code[$mol_keyboard_code["shift"] = 16] = "shift";
        $mol_keyboard_code[$mol_keyboard_code["ctrl"] = 17] = "ctrl";
        $mol_keyboard_code[$mol_keyboard_code["alt"] = 18] = "alt";
        $mol_keyboard_code[$mol_keyboard_code["pause"] = 19] = "pause";
        $mol_keyboard_code[$mol_keyboard_code["capsLock"] = 20] = "capsLock";
        $mol_keyboard_code[$mol_keyboard_code["escape"] = 27] = "escape";
        $mol_keyboard_code[$mol_keyboard_code["space"] = 32] = "space";
        $mol_keyboard_code[$mol_keyboard_code["pageUp"] = 33] = "pageUp";
        $mol_keyboard_code[$mol_keyboard_code["pageDown"] = 34] = "pageDown";
        $mol_keyboard_code[$mol_keyboard_code["end"] = 35] = "end";
        $mol_keyboard_code[$mol_keyboard_code["home"] = 36] = "home";
        $mol_keyboard_code[$mol_keyboard_code["left"] = 37] = "left";
        $mol_keyboard_code[$mol_keyboard_code["up"] = 38] = "up";
        $mol_keyboard_code[$mol_keyboard_code["right"] = 39] = "right";
        $mol_keyboard_code[$mol_keyboard_code["down"] = 40] = "down";
        $mol_keyboard_code[$mol_keyboard_code["insert"] = 45] = "insert";
        $mol_keyboard_code[$mol_keyboard_code["delete"] = 46] = "delete";
        $mol_keyboard_code[$mol_keyboard_code["key0"] = 48] = "key0";
        $mol_keyboard_code[$mol_keyboard_code["key1"] = 49] = "key1";
        $mol_keyboard_code[$mol_keyboard_code["key2"] = 50] = "key2";
        $mol_keyboard_code[$mol_keyboard_code["key3"] = 51] = "key3";
        $mol_keyboard_code[$mol_keyboard_code["key4"] = 52] = "key4";
        $mol_keyboard_code[$mol_keyboard_code["key5"] = 53] = "key5";
        $mol_keyboard_code[$mol_keyboard_code["key6"] = 54] = "key6";
        $mol_keyboard_code[$mol_keyboard_code["key7"] = 55] = "key7";
        $mol_keyboard_code[$mol_keyboard_code["key8"] = 56] = "key8";
        $mol_keyboard_code[$mol_keyboard_code["key9"] = 57] = "key9";
        $mol_keyboard_code[$mol_keyboard_code["A"] = 65] = "A";
        $mol_keyboard_code[$mol_keyboard_code["B"] = 66] = "B";
        $mol_keyboard_code[$mol_keyboard_code["C"] = 67] = "C";
        $mol_keyboard_code[$mol_keyboard_code["D"] = 68] = "D";
        $mol_keyboard_code[$mol_keyboard_code["E"] = 69] = "E";
        $mol_keyboard_code[$mol_keyboard_code["F"] = 70] = "F";
        $mol_keyboard_code[$mol_keyboard_code["G"] = 71] = "G";
        $mol_keyboard_code[$mol_keyboard_code["H"] = 72] = "H";
        $mol_keyboard_code[$mol_keyboard_code["I"] = 73] = "I";
        $mol_keyboard_code[$mol_keyboard_code["J"] = 74] = "J";
        $mol_keyboard_code[$mol_keyboard_code["K"] = 75] = "K";
        $mol_keyboard_code[$mol_keyboard_code["L"] = 76] = "L";
        $mol_keyboard_code[$mol_keyboard_code["M"] = 77] = "M";
        $mol_keyboard_code[$mol_keyboard_code["N"] = 78] = "N";
        $mol_keyboard_code[$mol_keyboard_code["O"] = 79] = "O";
        $mol_keyboard_code[$mol_keyboard_code["P"] = 80] = "P";
        $mol_keyboard_code[$mol_keyboard_code["Q"] = 81] = "Q";
        $mol_keyboard_code[$mol_keyboard_code["R"] = 82] = "R";
        $mol_keyboard_code[$mol_keyboard_code["S"] = 83] = "S";
        $mol_keyboard_code[$mol_keyboard_code["T"] = 84] = "T";
        $mol_keyboard_code[$mol_keyboard_code["U"] = 85] = "U";
        $mol_keyboard_code[$mol_keyboard_code["V"] = 86] = "V";
        $mol_keyboard_code[$mol_keyboard_code["W"] = 87] = "W";
        $mol_keyboard_code[$mol_keyboard_code["X"] = 88] = "X";
        $mol_keyboard_code[$mol_keyboard_code["Y"] = 89] = "Y";
        $mol_keyboard_code[$mol_keyboard_code["Z"] = 90] = "Z";
        $mol_keyboard_code[$mol_keyboard_code["metaLeft"] = 91] = "metaLeft";
        $mol_keyboard_code[$mol_keyboard_code["metaRight"] = 92] = "metaRight";
        $mol_keyboard_code[$mol_keyboard_code["select"] = 93] = "select";
        $mol_keyboard_code[$mol_keyboard_code["numpad0"] = 96] = "numpad0";
        $mol_keyboard_code[$mol_keyboard_code["numpad1"] = 97] = "numpad1";
        $mol_keyboard_code[$mol_keyboard_code["numpad2"] = 98] = "numpad2";
        $mol_keyboard_code[$mol_keyboard_code["numpad3"] = 99] = "numpad3";
        $mol_keyboard_code[$mol_keyboard_code["numpad4"] = 100] = "numpad4";
        $mol_keyboard_code[$mol_keyboard_code["numpad5"] = 101] = "numpad5";
        $mol_keyboard_code[$mol_keyboard_code["numpad6"] = 102] = "numpad6";
        $mol_keyboard_code[$mol_keyboard_code["numpad7"] = 103] = "numpad7";
        $mol_keyboard_code[$mol_keyboard_code["numpad8"] = 104] = "numpad8";
        $mol_keyboard_code[$mol_keyboard_code["numpad9"] = 105] = "numpad9";
        $mol_keyboard_code[$mol_keyboard_code["multiply"] = 106] = "multiply";
        $mol_keyboard_code[$mol_keyboard_code["add"] = 107] = "add";
        $mol_keyboard_code[$mol_keyboard_code["subtract"] = 109] = "subtract";
        $mol_keyboard_code[$mol_keyboard_code["decimal"] = 110] = "decimal";
        $mol_keyboard_code[$mol_keyboard_code["divide"] = 111] = "divide";
        $mol_keyboard_code[$mol_keyboard_code["F1"] = 112] = "F1";
        $mol_keyboard_code[$mol_keyboard_code["F2"] = 113] = "F2";
        $mol_keyboard_code[$mol_keyboard_code["F3"] = 114] = "F3";
        $mol_keyboard_code[$mol_keyboard_code["F4"] = 115] = "F4";
        $mol_keyboard_code[$mol_keyboard_code["F5"] = 116] = "F5";
        $mol_keyboard_code[$mol_keyboard_code["F6"] = 117] = "F6";
        $mol_keyboard_code[$mol_keyboard_code["F7"] = 118] = "F7";
        $mol_keyboard_code[$mol_keyboard_code["F8"] = 119] = "F8";
        $mol_keyboard_code[$mol_keyboard_code["F9"] = 120] = "F9";
        $mol_keyboard_code[$mol_keyboard_code["F10"] = 121] = "F10";
        $mol_keyboard_code[$mol_keyboard_code["F11"] = 122] = "F11";
        $mol_keyboard_code[$mol_keyboard_code["F12"] = 123] = "F12";
        $mol_keyboard_code[$mol_keyboard_code["numLock"] = 144] = "numLock";
        $mol_keyboard_code[$mol_keyboard_code["scrollLock"] = 145] = "scrollLock";
        $mol_keyboard_code[$mol_keyboard_code["semicolon"] = 186] = "semicolon";
        $mol_keyboard_code[$mol_keyboard_code["equals"] = 187] = "equals";
        $mol_keyboard_code[$mol_keyboard_code["comma"] = 188] = "comma";
        $mol_keyboard_code[$mol_keyboard_code["dash"] = 189] = "dash";
        $mol_keyboard_code[$mol_keyboard_code["period"] = 190] = "period";
        $mol_keyboard_code[$mol_keyboard_code["forwardSlash"] = 191] = "forwardSlash";
        $mol_keyboard_code[$mol_keyboard_code["graveAccent"] = 192] = "graveAccent";
        $mol_keyboard_code[$mol_keyboard_code["bracketOpen"] = 219] = "bracketOpen";
        $mol_keyboard_code[$mol_keyboard_code["slashBack"] = 220] = "slashBack";
        $mol_keyboard_code[$mol_keyboard_code["slashBackLeft"] = 226] = "slashBackLeft";
        $mol_keyboard_code[$mol_keyboard_code["bracketClose"] = 221] = "bracketClose";
        $mol_keyboard_code[$mol_keyboard_code["quoteSingle"] = 222] = "quoteSingle";
    })($mol_keyboard_code = $.$mol_keyboard_code || ($.$mol_keyboard_code = {}));
})($ || ($ = {}));
//mol/keyboard/code/code.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_button extends $.$mol_button {
            status(next = [null]) { return next; }
            disabled() {
                return !this.enabled();
            }
            event_activate(next) {
                if (!next)
                    return;
                if (!this.enabled())
                    return;
                try {
                    this.event_click(next);
                    this.click(next);
                    this.status([null]);
                }
                catch (error) {
                    this.status([error]);
                    $mol_fail_hidden(error);
                }
            }
            event_key_press(event) {
                if (event.keyCode === $mol_keyboard_code.enter) {
                    return this.event_activate(event);
                }
            }
            tab_index() {
                return this.enabled() ? super.tab_index() : -1;
            }
            error() {
                const [error] = this.status();
                if (!error)
                    return '';
                if (error instanceof Promise) {
                    return $mol_fail_hidden(error);
                }
                return String(error.message ?? error);
            }
            hint_safe() {
                try {
                    return this.hint();
                }
                catch (error) {
                    $mol_fail_log(error);
                    return '';
                }
            }
            sub_visible() {
                return [
                    ...this.error() ? [this.Speck()] : [],
                    ...this.sub(),
                ];
            }
        }
        __decorate([
            $mol_mem
        ], $mol_button.prototype, "status", null);
        $$.$mol_button = $mol_button;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//mol/button/button.view.ts
;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/button/button.view.css", "[mol_button] {\n\tborder: none;\n\tfont: inherit;\n\tdisplay: inline-flex;\n\tflex-shrink: 0;\n\ttext-decoration: inherit;\n\tcursor: inherit;\n\tposition: relative;\n\tbox-sizing: border-box;\n\tword-break: normal;\n\tcursor: default;\n\tuser-select: none;\n\tborder-radius: var(--mol_gap_round);\n}\n\n[mol_button]:where(:not(:disabled)):hover {\n\tz-index: var(--mol_layer_hover);\n}\n\n[mol_button]:focus {\n\toutline: none;\n\tz-index: var(--mol_layer_focus);\n}\n");
})($ || ($ = {}));
//mol/button/-css/button.view.css.ts
;
"use strict";
var $;
(function ($) {
    class $mol_button_typed extends $mol_button {
        minimal_height() {
            return 40;
        }
        minimal_width() {
            return 40;
        }
    }
    $.$mol_button_typed = $mol_button_typed;
})($ || ($ = {}));
//mol/button/typed/-view.tree/typed.view.tree.ts
;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/button/typed/typed.view.css", "[mol_button_typed] {\n\talign-content: center;\n\talign-items: center;\n\tpadding: var(--mol_gap_text);\n\tborder-radius: var(--mol_gap_round);\n\tgap: var(--mol_gap_space);\n\tuser-select: none;\n\tcursor: pointer;\n}\n\n[mol_button_typed][disabled] {\n\tpointer-events: none;\n}\n\n[mol_button_typed]:hover ,\n[mol_button_typed]:focus {\n\tbackground-color: var(--mol_theme_hover);\n}\n\n[mol_button_typed]:active {\n\tcolor: var(--mol_theme_focus);\n}\n\n");
})($ || ($ = {}));
//mol/button/typed/-css/typed.view.css.ts
;
"use strict";
var $;
(function ($) {
    class $mol_button_minor extends $mol_button_typed {
    }
    $.$mol_button_minor = $mol_button_minor;
})($ || ($ = {}));
//mol/button/minor/-view.tree/minor.view.tree.ts
;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/button/minor/minor.view.css", "[mol_button_minor] {\n\tcolor: var(--mol_theme_control);\n}\n\n[mol_button_minor][disabled] {\n\tcolor: var(--mol_theme_shade);\n}\n");
})($ || ($ = {}));
//mol/button/minor/-css/minor.view.css.ts
;
"use strict";
var $;
(function ($) {
    class $mol_check extends $mol_button_minor {
        attr() {
            return {
                ...super.attr(),
                mol_check_checked: this.checked(),
                "aria-checked": this.checked(),
                role: "checkbox"
            };
        }
        sub() {
            return [
                this.Icon(),
                this.label()
            ];
        }
        checked(val) {
            if (val !== undefined)
                return val;
            return false;
        }
        Icon() {
            return null;
        }
        title() {
            return "";
        }
        Title() {
            const obj = new this.$.$mol_view();
            obj.sub = () => [
                this.title()
            ];
            return obj;
        }
        label() {
            return [
                this.Title()
            ];
        }
    }
    __decorate([
        $mol_mem
    ], $mol_check.prototype, "checked", null);
    __decorate([
        $mol_mem
    ], $mol_check.prototype, "Title", null);
    $.$mol_check = $mol_check;
})($ || ($ = {}));
//mol/check/-view.tree/check.view.tree.ts
;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/check/check.css", "[mol_check] {\n\tflex: 0 0 auto;\n\tjustify-content: flex-start;\n\talign-content: center;\n\talign-items: flex-start;\n\tborder: none;\n\tfont-weight: inherit;\n\tbox-shadow: none;\n\ttext-align: left;\n\tdisplay: inline-flex;\n\tflex-wrap: nowrap;\n}\n\n[mol_check_title] {\n\tflex-shrink: 1;\n}\n\n[mol_check_checked] {\n\tcolor: var(--mol_theme_current);\n}\n");
})($ || ($ = {}));
//mol/check/-css/check.css.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_check extends $.$mol_check {
            click(next) {
                if (next?.defaultPrevented)
                    return;
                this.checked(!this.checked());
                if (next)
                    next.preventDefault();
            }
            sub() {
                return [
                    ...$mol_maybe(this.Icon()),
                    ...this.label(),
                ];
            }
            label() {
                return this.title() ? super.label() : [];
            }
        }
        $$.$mol_check = $mol_check;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//mol/check/check.view.ts
;
"use strict";
var $;
(function ($) {
    class $mol_svg extends $mol_view {
        dom_name() {
            return "svg";
        }
        dom_name_space() {
            return "http://www.w3.org/2000/svg";
        }
        font_size() {
            return 16;
        }
        font_family() {
            return "";
        }
        style_size() {
            return {};
        }
    }
    $.$mol_svg = $mol_svg;
})($ || ($ = {}));
//mol/svg/-view.tree/svg.view.tree.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_svg extends $.$mol_svg {
            computed_style() {
                const win = this.$.$mol_dom_context;
                const style = win.getComputedStyle(this.dom_node());
                if (!style['font-size'])
                    $mol_state_time.now(0);
                return style;
            }
            font_size() {
                return parseInt(this.computed_style()['font-size']) || 16;
            }
            font_family() {
                return this.computed_style()['font-family'];
            }
        }
        __decorate([
            $mol_mem
        ], $mol_svg.prototype, "computed_style", null);
        __decorate([
            $mol_mem
        ], $mol_svg.prototype, "font_size", null);
        __decorate([
            $mol_mem
        ], $mol_svg.prototype, "font_family", null);
        $$.$mol_svg = $mol_svg;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//mol/svg/svg.view.ts
;
"use strict";
var $;
(function ($) {
    class $mol_svg_root extends $mol_svg {
        dom_name() {
            return "svg";
        }
        attr() {
            return {
                ...super.attr(),
                viewBox: this.view_box(),
                preserveAspectRatio: this.aspect()
            };
        }
        view_box() {
            return "0 0 100 100";
        }
        aspect() {
            return "xMidYMid";
        }
    }
    $.$mol_svg_root = $mol_svg_root;
})($ || ($ = {}));
//mol/svg/root/-view.tree/root.view.tree.ts
;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/svg/root/root.view.css", "[mol_svg_root] {\n\toverflow: hidden;\n}\n");
})($ || ($ = {}));
//mol/svg/root/-css/root.view.css.ts
;
"use strict";
var $;
(function ($) {
    class $mol_svg_path extends $mol_svg {
        dom_name() {
            return "path";
        }
        attr() {
            return {
                ...super.attr(),
                d: this.geometry()
            };
        }
        geometry() {
            return "";
        }
    }
    $.$mol_svg_path = $mol_svg_path;
})($ || ($ = {}));
//mol/svg/path/-view.tree/path.view.tree.ts
;
"use strict";
var $;
(function ($) {
    class $mol_icon extends $mol_svg_root {
        view_box() {
            return "0 0 24 24";
        }
        minimal_width() {
            return 16;
        }
        minimal_height() {
            return 16;
        }
        sub() {
            return [
                this.Path()
            ];
        }
        path() {
            return "";
        }
        Path() {
            const obj = new this.$.$mol_svg_path();
            obj.geometry = () => this.path();
            return obj;
        }
    }
    __decorate([
        $mol_mem
    ], $mol_icon.prototype, "Path", null);
    $.$mol_icon = $mol_icon;
})($ || ($ = {}));
//mol/icon/-view.tree/icon.view.tree.ts
;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/icon/icon.view.css", "[mol_icon] {\n\tfill: currentColor;\n\tstroke: none;\n\twidth: 1em;\n\theight: 1.5em;\n\tflex: 0 0 auto;\n\tvertical-align: top;\n\tdisplay: inline-block;\n\tfilter: drop-shadow(0px 1px 1px var(--mol_theme_back));\n\ttransform-origin: center;\n}\n\n[mol_icon_path] {\n\ttransform-origin: center;\n}\n");
})($ || ($ = {}));
//mol/icon/-css/icon.view.css.ts
;
"use strict";
var $;
(function ($) {
    class $mol_icon_tick extends $mol_icon {
        path() {
            return "M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z";
        }
    }
    $.$mol_icon_tick = $mol_icon_tick;
})($ || ($ = {}));
//mol/icon/tick/-view.tree/tick.view.tree.ts
;
"use strict";
var $;
(function ($) {
    class $mol_check_box extends $mol_check {
        Icon() {
            const obj = new this.$.$mol_icon_tick();
            return obj;
        }
    }
    __decorate([
        $mol_mem
    ], $mol_check_box.prototype, "Icon", null);
    $.$mol_check_box = $mol_check_box;
})($ || ($ = {}));
//mol/check/box/-view.tree/box.view.tree.ts
;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/check/box/box.view.css", "[mol_check_box_icon] {\n\tborder-radius: var(--mol_gap_round);\n\tbox-shadow: inset 0 0 0 1px var(--mol_theme_line);\n\tcolor: var(--mol_theme_shade);\n\theight: 1rem;\n\talign-self: center;\n}\n\n[mol_check]:not([mol_check_checked]) > [mol_check_box_icon] {\n\tfill: transparent;\n}\n\n[mol_check]:not([disabled]) > [mol_check_box_icon] {\n\tbackground: var(--mol_theme_field);\n\tcolor: var(--mol_theme_text);\n}\n");
})($ || ($ = {}));
//mol/check/box/-css/box.view.css.ts
;
"use strict";
var $;
(function ($) {
    class $mol_link extends $mol_view {
        uri() {
            return "";
        }
        dom_name() {
            return "a";
        }
        attr() {
            return {
                ...super.attr(),
                href: this.uri_toggle(),
                title: this.hint_safe(),
                target: this.target(),
                download: this.file_name(),
                mol_link_current: this.current()
            };
        }
        sub() {
            return [
                this.title()
            ];
        }
        arg() {
            return {};
        }
        event() {
            return {
                ...super.event(),
                click: (event) => this.click(event)
            };
        }
        uri_toggle() {
            return "";
        }
        hint() {
            return "";
        }
        hint_safe() {
            return this.hint();
        }
        target() {
            return "_self";
        }
        file_name() {
            return "";
        }
        current() {
            return false;
        }
        event_click(event) {
            if (event !== undefined)
                return event;
            return null;
        }
        click(event) {
            return this.event_click(event);
        }
    }
    __decorate([
        $mol_mem
    ], $mol_link.prototype, "event_click", null);
    $.$mol_link = $mol_link;
})($ || ($ = {}));
//mol/link/-view.tree/link.view.tree.ts
;
"use strict";
//mol/state/arg/arg.ts
;
"use strict";
var $;
(function ($) {
    $.$mol_action = $mol_wire_method;
})($ || ($ = {}));
//mol/action/action.ts
;
"use strict";
var $;
(function ($) {
    class $mol_state_arg extends $mol_object {
        prefix;
        static href(next) {
            if (next === undefined) {
                next = $mol_dom_context.location.href;
            }
            else if (!/^about:srcdoc/.test(next)) {
                new $mol_after_frame(() => {
                    const next = this.href();
                    const prev = $mol_dom_context.location.href;
                    if (next === prev)
                        return;
                    const history = $mol_dom_context.history;
                    history.replaceState(history.state, $mol_dom_context.document.title, next);
                });
            }
            if ($mol_dom_context.parent !== $mol_dom_context.self) {
                $mol_dom_context.parent.postMessage(['hashchange', next], '*');
            }
            return next;
        }
        static href_normal() {
            return this.link({});
        }
        static href_absolute() {
            return new URL(this.href(), $mol_dom_context.location.href).toString();
        }
        static dict(next) {
            var href = this.href(next && this.make_link(next)).split(/#!?/)[1] || '';
            var chunks = href.split(this.separator);
            var params = {};
            chunks.forEach(chunk => {
                if (!chunk)
                    return;
                var vals = chunk.split('=').map(decodeURIComponent);
                params[vals.shift()] = vals.join('=');
            });
            return params;
        }
        static dict_cut(except) {
            const dict = this.dict();
            const cut = {};
            for (const key in dict) {
                if (except.indexOf(key) >= 0)
                    break;
                cut[key] = dict[key];
            }
            return cut;
        }
        static value(key, next) {
            const nextDict = (next === void 0) ? void 0 : { ...this.dict(), [key]: next };
            const next2 = this.dict(nextDict)[key];
            return (next2 == null) ? null : next2;
        }
        static link(next) {
            return this.make_link({
                ...this.dict_cut(Object.keys(next)),
                ...next,
            });
        }
        static prolog = '!';
        static separator = '/';
        static make_link(next) {
            const chunks = [];
            for (let key in next) {
                if (null == next[key])
                    continue;
                const val = next[key];
                chunks.push([key].concat(val ? [val] : []).map(this.encode).join('='));
            }
            return new URL('#' + this.prolog + chunks.join(this.separator), this.href_absolute()).toString();
        }
        static go(next) {
            $mol_dom_context.location.href = this.make_link(next);
        }
        static encode(str) {
            return encodeURIComponent(str).replace(/\(/g, '%28').replace(/\)/g, '%29');
        }
        constructor(prefix = '') {
            super();
            this.prefix = prefix;
        }
        value(key, next) {
            return this.constructor.value(this.prefix + key, next);
        }
        sub(postfix) {
            return new this.constructor(this.prefix + postfix + '.');
        }
        link(next) {
            var prefix = this.prefix;
            var dict = {};
            for (var key in next) {
                dict[prefix + key] = next[key];
            }
            return this.constructor.link(dict);
        }
    }
    __decorate([
        $mol_mem
    ], $mol_state_arg, "href", null);
    __decorate([
        $mol_mem
    ], $mol_state_arg, "href_normal", null);
    __decorate([
        $mol_mem
    ], $mol_state_arg, "href_absolute", null);
    __decorate([
        $mol_mem
    ], $mol_state_arg, "dict", null);
    __decorate([
        $mol_mem_key
    ], $mol_state_arg, "dict_cut", null);
    __decorate([
        $mol_mem_key
    ], $mol_state_arg, "value", null);
    __decorate([
        $mol_mem_key
    ], $mol_state_arg, "make_link", null);
    __decorate([
        $mol_action
    ], $mol_state_arg, "go", null);
    $.$mol_state_arg = $mol_state_arg;
    const $mol_state_arg_change = (event) => {
        $mol_state_arg.href($mol_dom_context.location.href);
    };
    self.addEventListener('hashchange', $mol_state_arg_change);
})($ || ($ = {}));
//mol/state/arg/arg.web.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_link extends $.$mol_link {
            uri_toggle() {
                return this.current() ? this.uri_off() : this.uri();
            }
            uri() {
                return new this.$.$mol_state_arg(this.state_key()).link(this.arg());
            }
            uri_off() {
                const arg2 = {};
                for (let i in this.arg())
                    arg2[i] = null;
                return new this.$.$mol_state_arg(this.state_key()).link(arg2);
            }
            uri_native() {
                const base = this.$.$mol_state_arg.href();
                return new URL(this.uri(), base);
            }
            current() {
                const base = this.$.$mol_state_arg.href_normal();
                const target = this.uri_native().toString();
                if (base === target)
                    return true;
                const args = this.arg();
                const keys = Object.keys(args).filter(key => args[key] != null);
                if (keys.length === 0)
                    return false;
                for (const key of keys) {
                    if (this.$.$mol_state_arg.value(key) != args[key])
                        return false;
                }
                return true;
            }
            file_name() {
                return null;
            }
            minimal_height() {
                return Math.max(super.minimal_height(), 24);
            }
            external() {
                return this.uri_native().origin !== $mol_dom_context.location.origin;
            }
            target() {
                return this.external() ? '_blank' : '_self';
            }
            hint_safe() {
                try {
                    return this.hint();
                }
                catch (error) {
                    $mol_fail_log(error);
                    return '';
                }
            }
        }
        __decorate([
            $mol_mem
        ], $mol_link.prototype, "uri_toggle", null);
        __decorate([
            $mol_mem
        ], $mol_link.prototype, "uri", null);
        __decorate([
            $mol_mem
        ], $mol_link.prototype, "uri_off", null);
        __decorate([
            $mol_mem
        ], $mol_link.prototype, "uri_native", null);
        __decorate([
            $mol_mem
        ], $mol_link.prototype, "current", null);
        $$.$mol_link = $mol_link;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//mol/link/link.view.ts
;
"use strict";
var $;
(function ($) {
    const { rem } = $mol_style_unit;
    const { scale } = $mol_style_func;
    $mol_style_define($mol_link, {
        textDecoration: 'none',
        color: $mol_theme.control,
        stroke: 'currentcolor',
        cursor: 'pointer',
        padding: $mol_gap.text,
        boxSizing: 'border-box',
        position: 'relative',
        minWidth: rem(2.5),
        gap: $mol_gap.space,
        border: {
            radius: $mol_gap.round,
        },
        ':hover': {
            background: {
                color: $mol_theme.hover,
            },
        },
        ':focus': {
            outline: 'none',
            background: {
                color: $mol_theme.hover,
            },
        },
        ':focus-within': {
            outline: 'none',
            background: {
                color: $mol_theme.hover,
            }
        },
        ':active': {
            color: $mol_theme.focus,
        },
        '@': {
            mol_link_current: {
                'true': {
                    color: $mol_theme.current,
                    textShadow: '0 0',
                }
            }
        },
    });
})($ || ($ = {}));
//mol/link/link.view.css.ts
;
"use strict";
var $;
(function ($) {
    class $mol_state_local extends $mol_object {
        static 'native()';
        static native() {
            if (this['native()'])
                return this['native()'];
            check: try {
                const native = $mol_dom_context.localStorage;
                if (!native)
                    break check;
                native.setItem('', '');
                native.removeItem('');
                return this['native()'] = native;
            }
            catch (error) {
                console.warn(error);
            }
            return this['native()'] = {
                getItem(key) {
                    return this[':' + key];
                },
                setItem(key, value) {
                    this[':' + key] = value;
                },
                removeItem(key) {
                    this[':' + key] = void 0;
                }
            };
        }
        static changes(next) { return next; }
        static value(key, next) {
            this.changes();
            if (next === void 0)
                return JSON.parse(this.native().getItem(key) || 'null');
            if (next === null)
                this.native().removeItem(key);
            else
                this.native().setItem(key, JSON.stringify(next));
            return next;
        }
        prefix() { return ''; }
        value(key, next) {
            return $mol_state_local.value(this.prefix() + '.' + key, next);
        }
    }
    __decorate([
        $mol_mem
    ], $mol_state_local, "changes", null);
    __decorate([
        $mol_mem_key
    ], $mol_state_local, "value", null);
    $.$mol_state_local = $mol_state_local;
})($ || ($ = {}));
//mol/state/local/local.ts
;
"use strict";
var $;
(function ($) {
    self.addEventListener('storage', event => $.$mol_state_local.changes(event));
})($ || ($ = {}));
//mol/state/local/local.web.ts
;
"use strict";
//mol/charset/encoding/encoding.ts
;
"use strict";
var $;
(function ($) {
    const decoders = {};
    function $mol_charset_decode(buffer, encoding = 'utf8') {
        let decoder = decoders[encoding];
        if (!decoder)
            decoder = decoders[encoding] = new TextDecoder(encoding);
        return decoder.decode(buffer);
    }
    $.$mol_charset_decode = $mol_charset_decode;
})($ || ($ = {}));
//mol/charset/decode/decode.ts
;
"use strict";
//node/node.ts
;
"use strict";
var $node = $node || {};
//node/node.web.ts
;
"use strict";
var $;
(function ($) {
    const TextEncoder = globalThis.TextEncoder ?? $node.util.TextEncoder;
    const encoder = new TextEncoder();
    function $mol_charset_encode(value) {
        return encoder.encode(value);
    }
    $.$mol_charset_encode = $mol_charset_encode;
})($ || ($ = {}));
//mol/charset/encode/encode.ts
;
"use strict";
var $;
(function ($) {
    class $mol_file_not_found extends Error {
    }
    $.$mol_file_not_found = $mol_file_not_found;
    class $mol_file extends $mol_object {
        static absolute(path) {
            throw new Error('Not implemented yet');
        }
        static relative(path) {
            throw new Error('Not implemented yet');
        }
        static base = '';
        path() {
            return '.';
        }
        parent() {
            return this.resolve('..');
        }
        reset() {
            try {
                this.stat(null);
            }
            catch (error) {
                if (error instanceof $mol_file_not_found)
                    return;
                return $mol_fail_hidden(error);
            }
        }
        version() {
            return this.stat()?.mtime.getTime().toString(36).toUpperCase() ?? '';
        }
        watcher() {
            console.warn('$mol_file_web.watcher() not implemented');
            return {
                destructor() { }
            };
        }
        exists(next) {
            let exists = Boolean(this.stat());
            if (next === undefined)
                return exists;
            if (next === exists)
                return exists;
            if (next)
                this.parent().exists(true);
            this.ensure();
            this.reset();
            return next;
        }
        type() {
            return this.stat()?.type ?? '';
        }
        name() {
            return this.path().replace(/^.*\//, '');
        }
        ext() {
            const match = /((?:\.\w+)+)$/.exec(this.path());
            return match ? match[1].substring(1) : '';
        }
        text(next, virt) {
            if (virt) {
                const now = new Date;
                this.stat({
                    type: 'file',
                    size: 0,
                    atime: now,
                    mtime: now,
                    ctime: now,
                }, 'virt');
                return next;
            }
            if (next === undefined) {
                return $mol_charset_decode(this.buffer(undefined));
            }
            else {
                const buffer = next === undefined ? undefined : $mol_charset_encode(next);
                this.buffer(buffer);
                return next;
            }
        }
        find(include, exclude) {
            const found = [];
            const sub = this.sub();
            for (const child of sub) {
                const child_path = child.path();
                if (exclude && child_path.match(exclude))
                    continue;
                if (!include || child_path.match(include))
                    found.push(child);
                if (child.type() === 'dir') {
                    const sub_child = child.find(include, exclude);
                    for (const child of sub_child)
                        found.push(child);
                }
            }
            return found;
        }
        size() {
            switch (this.type()) {
                case 'file': return this.stat()?.size ?? 0;
                default: return 0;
            }
        }
    }
    __decorate([
        $mol_mem
    ], $mol_file.prototype, "exists", null);
    __decorate([
        $mol_mem
    ], $mol_file.prototype, "text", null);
    __decorate([
        $mol_mem_key
    ], $mol_file, "absolute", null);
    $.$mol_file = $mol_file;
})($ || ($ = {}));
//mol/file/file.ts
;
"use strict";
var $;
(function ($) {
    function $mol_dom_parse(text, type = 'application/xhtml+xml') {
        const parser = new $mol_dom_context.DOMParser();
        const doc = parser.parseFromString(text, type);
        const error = doc.getElementsByTagName('parsererror');
        if (error.length)
            throw new Error(error[0].textContent);
        return doc;
    }
    $.$mol_dom_parse = $mol_dom_parse;
})($ || ($ = {}));
//mol/dom/parse/parse.ts
;
"use strict";
var $;
(function ($) {
    class $mol_fetch_response extends $mol_object2 {
        native;
        constructor(native) {
            super();
            this.native = native;
        }
        status() {
            const types = ['unknown', 'inform', 'success', 'redirect', 'wrong', 'failed'];
            return types[Math.floor(this.native.status / 100)];
        }
        code() {
            return this.native.status;
        }
        message() {
            return this.native.statusText || `HTTP Error ${this.code()}`;
        }
        headers() {
            return this.native.headers;
        }
        mime() {
            return this.headers().get('content-type');
        }
        stream() {
            return this.native.body;
        }
        text() {
            const buffer = this.buffer();
            const native = this.native;
            const mime = native.headers.get('content-type') || '';
            const [, charset] = /charset=(.*)/.exec(mime) || [, 'utf-8'];
            const decoder = new TextDecoder(charset);
            return decoder.decode(buffer);
        }
        json() {
            return $mol_wire_sync(this.native).json();
        }
        buffer() {
            return $mol_wire_sync(this.native).arrayBuffer();
        }
        xml() {
            return $mol_dom_parse(this.text(), 'application/xml');
        }
        xhtml() {
            return $mol_dom_parse(this.text(), 'application/xhtml+xml');
        }
        html() {
            return $mol_dom_parse(this.text(), 'text/html');
        }
    }
    __decorate([
        $mol_action
    ], $mol_fetch_response.prototype, "stream", null);
    __decorate([
        $mol_action
    ], $mol_fetch_response.prototype, "text", null);
    __decorate([
        $mol_action
    ], $mol_fetch_response.prototype, "buffer", null);
    __decorate([
        $mol_action
    ], $mol_fetch_response.prototype, "xml", null);
    __decorate([
        $mol_action
    ], $mol_fetch_response.prototype, "xhtml", null);
    __decorate([
        $mol_action
    ], $mol_fetch_response.prototype, "html", null);
    $.$mol_fetch_response = $mol_fetch_response;
    class $mol_fetch extends $mol_object2 {
        static request(input, init = {}) {
            const native = globalThis.fetch ?? $node['undici'].fetch;
            const controller = new AbortController();
            let done = false;
            const promise = native(input, {
                ...init,
                signal: controller.signal,
            }).finally(() => {
                done = true;
            });
            return Object.assign(promise, {
                destructor: () => {
                    if (!done && !controller.signal.aborted)
                        controller.abort();
                },
            });
        }
        static response(input, init) {
            return new $mol_fetch_response($mol_wire_sync(this).request(input, init));
        }
        static success(input, init) {
            const response = this.response(input, init);
            if (response.status() === 'success')
                return response;
            throw new Error(response.message());
        }
        static stream(input, init) {
            return this.success(input, init).stream();
        }
        static text(input, init) {
            return this.success(input, init).text();
        }
        static json(input, init) {
            return this.success(input, init).json();
        }
        static buffer(input, init) {
            return this.success(input, init).buffer();
        }
        static xml(input, init) {
            return this.success(input, init).xml();
        }
        static xhtml(input, init) {
            return this.success(input, init).xhtml();
        }
        static html(input, init) {
            return this.success(input, init).html();
        }
    }
    __decorate([
        $mol_action
    ], $mol_fetch, "response", null);
    __decorate([
        $mol_action
    ], $mol_fetch, "success", null);
    __decorate([
        $mol_action
    ], $mol_fetch, "stream", null);
    __decorate([
        $mol_action
    ], $mol_fetch, "text", null);
    __decorate([
        $mol_action
    ], $mol_fetch, "json", null);
    __decorate([
        $mol_action
    ], $mol_fetch, "buffer", null);
    __decorate([
        $mol_action
    ], $mol_fetch, "xml", null);
    __decorate([
        $mol_action
    ], $mol_fetch, "xhtml", null);
    __decorate([
        $mol_action
    ], $mol_fetch, "html", null);
    $.$mol_fetch = $mol_fetch;
})($ || ($ = {}));
//mol/fetch/fetch.ts
;
"use strict";
var $;
(function ($) {
    class $mol_file_web extends $mol_file {
        static absolute(path) {
            return this.make({
                path: $mol_const(path)
            });
        }
        static relative(path) {
            return this.absolute(new URL(path, this.base).toString());
        }
        static base = $mol_dom_context.document
            ? new URL('.', $mol_dom_context.document.currentScript['src']).toString()
            : '';
        buffer(next) {
            if (next !== undefined)
                throw new Error(`Saving content not supported: ${this.path}`);
            const response = $mol_fetch.response(this.path());
            if (response.native.status === 404)
                throw new $mol_file_not_found(`File not found: ${this.path()}`);
            return new Uint8Array(response.buffer());
        }
        stat(next, virt) {
            let stat = next;
            if (next === undefined) {
                const content = this.text();
                const ctime = new Date();
                stat = {
                    type: 'file',
                    size: content.length,
                    ctime,
                    atime: ctime,
                    mtime: ctime
                };
            }
            this.parent().watcher();
            return stat;
        }
        resolve(path) {
            let res = this.path() + '/' + path;
            while (true) {
                let prev = res;
                res = res.replace(/\/[^\/.]+\/\.\.\//, '/');
                if (prev === res)
                    break;
            }
            return this.constructor.absolute(res);
        }
        ensure() {
            throw new Error('$mol_file_web.ensure() not implemented');
        }
        sub() {
            throw new Error('$mol_file_web.sub() not implemented');
        }
        relate(base = this.constructor.relative('.')) {
            throw new Error('$mol_file_web.relate() not implemented');
        }
        append(next) {
            throw new Error('$mol_file_web.append() not implemented');
        }
    }
    __decorate([
        $mol_mem
    ], $mol_file_web.prototype, "buffer", null);
    __decorate([
        $mol_mem
    ], $mol_file_web.prototype, "stat", null);
    __decorate([
        $mol_mem
    ], $mol_file_web.prototype, "sub", null);
    __decorate([
        $mol_mem_key
    ], $mol_file_web, "absolute", null);
    $.$mol_file_web = $mol_file_web;
    $.$mol_file = $mol_file_web;
})($ || ($ = {}));
//mol/file/file.web.ts
;
"use strict";
//mol/data/value/value.ts
;
"use strict";
//mol/type/equals/equals.ts
;
"use strict";
//mol/type/merge/merge.ts
;
"use strict";
//mol/type/partial/undefined/undefined.ts
;
"use strict";
var $;
(function ($) {
    function $mol_data_setup(value, config) {
        return Object.assign(value, {
            config,
            Value: null
        });
    }
    $.$mol_data_setup = $mol_data_setup;
})($ || ($ = {}));
//mol/data/setup/setup.ts
;
"use strict";
var $;
(function ($) {
    function $mol_data_record(sub) {
        return $mol_data_setup((val) => {
            let res = {};
            for (const field in sub) {
                try {
                    res[field] = sub[field](val[field]);
                }
                catch (error) {
                    if (error instanceof Promise)
                        return $mol_fail_hidden(error);
                    error.message = `[${JSON.stringify(field)}] ${error.message}`;
                    return $mol_fail(error);
                }
            }
            return res;
        }, sub);
    }
    $.$mol_data_record = $mol_data_record;
})($ || ($ = {}));
//mol/data/record/record.ts
;
"use strict";
var $;
(function ($) {
    function $mol_diff_path(...paths) {
        const limit = Math.min(...paths.map(path => path.length));
        lookup: for (var i = 0; i < limit; ++i) {
            const first = paths[0][i];
            for (let j = 1; j < paths.length; ++j) {
                if (paths[j][i] !== first)
                    break lookup;
            }
        }
        return {
            prefix: paths[0].slice(0, i),
            suffix: paths.map(path => path.slice(i)),
        };
    }
    $.$mol_diff_path = $mol_diff_path;
})($ || ($ = {}));
//mol/diff/path/path.ts
;
"use strict";
var $;
(function ($) {
    class $mol_error_mix extends Error {
        errors;
        constructor(message, ...errors) {
            super(message);
            this.errors = errors;
            if (errors.length) {
                const stacks = [...errors.map(error => error.stack), this.stack];
                const diff = $mol_diff_path(...stacks.map(stack => {
                    if (!stack)
                        return [];
                    return stack.split('\n').reverse();
                }));
                const head = diff.prefix.reverse().join('\n');
                const tails = diff.suffix.map(path => path.reverse().map(line => line.replace(/^(?!\s+at)/, '\tat (.) ')).join('\n')).join('\n\tat (.) -----\n');
                this.stack = `Error: ${this.constructor.name}\n\tat (.) /"""\\\n${tails}\n\tat (.) \\___/\n${head}`;
                this.message += errors.map(error => '\n' + error.message).join('');
            }
        }
        toJSON() {
            return this.message;
        }
    }
    $.$mol_error_mix = $mol_error_mix;
})($ || ($ = {}));
//mol/error/mix/mix.ts
;
"use strict";
var $;
(function ($) {
    class $mol_data_error extends $mol_error_mix {
    }
    $.$mol_data_error = $mol_data_error;
})($ || ($ = {}));
//mol/data/error/error.ts
;
"use strict";
var $;
(function ($) {
    function $mol_data_array(sub) {
        return $mol_data_setup((val) => {
            if (!Array.isArray(val))
                return $mol_fail(new $mol_data_error(`${val} is not an array`));
            return val.map((item, index) => {
                try {
                    return sub(item);
                }
                catch (error) {
                    if (error instanceof Promise)
                        return $mol_fail_hidden(error);
                    error.message = `[${index}] ${error.message}`;
                    return $mol_fail(error);
                }
            });
        }, sub);
    }
    $.$mol_data_array = $mol_data_array;
})($ || ($ = {}));
//mol/data/array/array.ts
;
"use strict";
var $;
(function ($) {
    $.$mol_data_string = (val) => {
        if (typeof val === 'string')
            return val;
        return $mol_fail(new $mol_data_error(`${val} is not a string`));
    };
})($ || ($ = {}));
//mol/data/string/string.ts
;
"use strict";
var $;
(function ($) {
    const Response = $mol_data_record({
        data: $mol_data_array($mol_data_string)
    });
    function $mol_huggingface_run(space, method, ...data) {
        if (typeof method === 'number') {
            return $mol_wire_sync(this).$mol_huggingface_async(space, method, ...data);
        }
        const response = $mol_fetch.json(`https://${space}.hf.space/run/${method}`, {
            method: 'post',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ data }),
        });
        return Response(response).data;
    }
    $.$mol_huggingface_run = $mol_huggingface_run;
    function $mol_huggingface_async(space, method, ...data) {
        const session_hash = $mol_guid();
        const fn_index = method;
        const socket = new WebSocket(`wss://${space}.hf.space/queue/join`);
        const promise = new Promise((done, fail) => {
            socket.onclose = event => {
                if (event.reason)
                    fail(new Error(event.reason));
            };
            socket.onerror = event => {
                fail(new Error('Scoket error'));
            };
            socket.onmessage = event => {
                const message = JSON.parse(event.data);
                switch (message.msg) {
                    case 'send_hash':
                        return socket.send(JSON.stringify({ session_hash, fn_index }));
                    case 'estimation': return;
                    case 'send_data':
                        return socket.send(JSON.stringify({ session_hash, fn_index, data }));
                    case 'process_starts': return;
                    case 'process_completed':
                        if (message.success) {
                            return done(message.output.data);
                        }
                        else {
                            return fail(new Error(message.output.error ?? 'Unknown api error'));
                        }
                    default:
                        fail(new Error(`Unknown message type ${message.msg}`));
                }
            };
        });
        return Object.assign(promise, {
            destructor: () => socket.close()
        });
    }
    $.$mol_huggingface_async = $mol_huggingface_async;
})($ || ($ = {}));
//mol/huggingface/huggingface.ts
;
"use strict";
var $;
(function ($) {
    function $hyoo_lingua_translate(lang, text) {
        return this.$mol_huggingface_run('hyoo-translate', 0, lang, text)[0];
    }
    $.$hyoo_lingua_translate = $hyoo_lingua_translate;
})($ || ($ = {}));
//hyoo/lingua/translate/translate.ts
;
"use strict";
var $;
(function ($) {
    class $mol_locale extends $mol_object {
        static lang_default() {
            return 'en';
        }
        static lang(next) {
            return this.$.$mol_state_local.value('locale', next) || $mol_dom_context.navigator.language.replace(/-.*/, '') || this.lang_default();
        }
        static source(lang) {
            return JSON.parse(this.$.$mol_file.relative(`web.locale=${lang}.json`).text().toString());
        }
        static texts(lang, next) {
            if (next)
                return next;
            try {
                return this.source(lang).valueOf();
            }
            catch (error) {
                if ($mol_fail_catch(error)) {
                    const def = this.lang_default();
                    if (lang === def)
                        throw error;
                    return {};
                }
            }
        }
        static text(key) {
            const lang = this.lang();
            const target = this.texts(lang)[key];
            if (target)
                return target;
            this.warn(key);
            const en = this.texts('en')[key];
            if (!en)
                return key;
            const cache_key = `$mol_locale.text(${JSON.stringify(key)})`;
            const cached = this.$.$mol_state_local.value(cache_key);
            if (cached)
                return cached;
            try {
                const translated = $mol_wire_sync($hyoo_lingua_translate).call(this.$, lang, en);
                return this.$.$mol_state_local.value(cache_key, translated);
            }
            catch (error) {
                $mol_fail_log(error);
            }
            return en;
        }
        static warn(key) {
            console.warn(`Not translated to "${this.lang()}": ${key}`);
            return null;
        }
    }
    __decorate([
        $mol_mem
    ], $mol_locale, "lang_default", null);
    __decorate([
        $mol_mem
    ], $mol_locale, "lang", null);
    __decorate([
        $mol_mem_key
    ], $mol_locale, "source", null);
    __decorate([
        $mol_mem_key
    ], $mol_locale, "texts", null);
    __decorate([
        $mol_mem_key
    ], $mol_locale, "text", null);
    __decorate([
        $mol_mem_key
    ], $mol_locale, "warn", null);
    $.$mol_locale = $mol_locale;
})($ || ($ = {}));
//mol/locale/locale.ts
;
"use strict";
var $;
(function ($) {
    class $mol_icon_github_circle extends $mol_icon {
        path() {
            return "M12,2C6.48,2 2,6.48 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12C22,6.48 17.52,2 12,2Z";
        }
    }
    $.$mol_icon_github_circle = $mol_icon_github_circle;
})($ || ($ = {}));
//mol/icon/github/circle/-view.tree/circle.view.tree.ts
;
"use strict";
var $;
(function ($) {
    class $mol_link_source extends $mol_link {
        hint() {
            return this.$.$mol_locale.text('$mol_link_source_hint');
        }
        sub() {
            return [
                this.Icon()
            ];
        }
        Icon() {
            const obj = new this.$.$mol_icon_github_circle();
            return obj;
        }
    }
    __decorate([
        $mol_mem
    ], $mol_link_source.prototype, "Icon", null);
    $.$mol_link_source = $mol_link_source;
})($ || ($ = {}));
//mol/link/source/-view.tree/source.view.tree.ts
;
"use strict";
var $;
(function ($) {
    class $mol_scroll extends $mol_view {
        scroll_top(val) {
            if (val !== undefined)
                return val;
            return 0;
        }
        scroll_left(val) {
            if (val !== undefined)
                return val;
            return 0;
        }
        field() {
            return {
                ...super.field(),
                tabIndex: this.tabindex()
            };
        }
        event() {
            return {
                ...super.event(),
                scroll: (event) => this.event_scroll(event)
            };
        }
        tabindex() {
            return -1;
        }
        event_scroll(event) {
            if (event !== undefined)
                return event;
            return null;
        }
    }
    __decorate([
        $mol_mem
    ], $mol_scroll.prototype, "scroll_top", null);
    __decorate([
        $mol_mem
    ], $mol_scroll.prototype, "scroll_left", null);
    __decorate([
        $mol_mem
    ], $mol_scroll.prototype, "event_scroll", null);
    $.$mol_scroll = $mol_scroll;
})($ || ($ = {}));
//mol/scroll/-view.tree/scroll.view.tree.ts
;
"use strict";
var $;
(function ($) {
    class $mol_dom_listener extends $mol_object {
        _node;
        _event;
        _handler;
        _config;
        constructor(_node, _event, _handler, _config = { passive: true }) {
            super();
            this._node = _node;
            this._event = _event;
            this._handler = _handler;
            this._config = _config;
            this._node.addEventListener(this._event, this._handler, this._config);
        }
        destructor() {
            this._node.removeEventListener(this._event, this._handler, this._config);
            super.destructor();
        }
    }
    $.$mol_dom_listener = $mol_dom_listener;
})($ || ($ = {}));
//mol/dom/listener/listener.ts
;
"use strict";
var $;
(function ($) {
    class $mol_print extends $mol_object {
        static before() {
            return new $mol_dom_listener(this.$.$mol_dom_context, 'beforeprint', () => {
                this.active(true);
            });
        }
        static after() {
            return new $mol_dom_listener(this.$.$mol_dom_context, 'afterprint', () => {
                this.active(false);
            });
        }
        static active(next) {
            this.before();
            this.after();
            return next || false;
        }
    }
    __decorate([
        $mol_mem
    ], $mol_print, "before", null);
    __decorate([
        $mol_mem
    ], $mol_print, "after", null);
    __decorate([
        $mol_mem
    ], $mol_print, "active", null);
    $.$mol_print = $mol_print;
})($ || ($ = {}));
//mol/print/print.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_scroll extends $.$mol_scroll {
            scroll_top(next, cache) {
                const el = this.dom_node();
                if (next !== undefined && !cache)
                    el.scrollTop = next;
                return el.scrollTop;
            }
            scroll_left(next, cache) {
                const el = this.dom_node();
                if (next !== undefined && !cache)
                    el.scrollLeft = next;
                return el.scrollLeft;
            }
            event_scroll(next) {
                const el = this.dom_node();
                this.scroll_left(el.scrollLeft, 'cache');
                this.scroll_top(el.scrollTop, 'cache');
            }
            minimal_height() {
                return this.$.$mol_print.active() ? null : 0;
            }
            minimal_width() {
                return this.$.$mol_print.active() ? null : 0;
            }
        }
        __decorate([
            $mol_mem
        ], $mol_scroll.prototype, "scroll_top", null);
        __decorate([
            $mol_mem
        ], $mol_scroll.prototype, "scroll_left", null);
        $$.$mol_scroll = $mol_scroll;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//mol/scroll/scroll.view.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        const { per, rem, px } = $mol_style_unit;
        $mol_style_define($mol_scroll, {
            overflow: 'auto',
        });
        $mol_style_define($mol_scroll, {
            display: 'flex',
            overflow: 'overlay',
            flex: {
                direction: 'column',
                grow: 1,
                shrink: 1,
            },
            outline: 'none',
            alignSelf: 'stretch',
            boxSizing: 'border-box',
            willChange: 'scroll-position',
            scroll: {
                padding: [rem(.75), 0],
            },
            maxHeight: per(100),
            maxWidth: per(100),
            webkitOverflowScrolling: 'touch',
            contain: 'content',
            '>': {
                $mol_view: {
                    transform: 'translateZ(0)',
                },
            },
            '::before': {
                display: 'none',
            },
            '::after': {
                display: 'none',
            },
            '::-webkit-scrollbar': {
                width: rem(.25),
                height: rem(.25),
            },
            ':hover': {
                '::-webkit-scrollbar': {
                    width: rem(.5),
                    height: rem(.5),
                },
            },
            '@media': {
                'print': {
                    overflow: 'visible',
                    contain: 'none',
                    maxHeight: 'unset',
                },
            },
        });
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//mol/scroll/scroll.view.css.ts
;
"use strict";
var $;
(function ($) {
    class $mol_page extends $mol_view {
        dom_name() {
            return "article";
        }
        field() {
            return {
                ...super.field(),
                tabIndex: this.tabindex()
            };
        }
        sub() {
            return [
                this.Head(),
                this.Body(),
                this.Foot()
            ];
        }
        tabindex() {
            return -1;
        }
        Logo() {
            return null;
        }
        title_content() {
            return [
                this.Logo(),
                this.title()
            ];
        }
        Title() {
            const obj = new this.$.$mol_view();
            obj.dom_name = () => "h1";
            obj.sub = () => this.title_content();
            return obj;
        }
        tools() {
            return [];
        }
        Tools() {
            const obj = new this.$.$mol_view();
            obj.sub = () => this.tools();
            return obj;
        }
        head() {
            return [
                this.Title(),
                this.Tools()
            ];
        }
        Head() {
            const obj = new this.$.$mol_view();
            obj.minimal_height = () => 64;
            obj.dom_name = () => "header";
            obj.sub = () => this.head();
            return obj;
        }
        body() {
            return [];
        }
        body_scroll_top(val) {
            return this.Body().scroll_top(val);
        }
        Body() {
            const obj = new this.$.$mol_scroll();
            obj.sub = () => this.body();
            return obj;
        }
        foot() {
            return [];
        }
        Foot() {
            const obj = new this.$.$mol_view();
            obj.dom_name = () => "footer";
            obj.sub = () => this.foot();
            return obj;
        }
    }
    __decorate([
        $mol_mem
    ], $mol_page.prototype, "Title", null);
    __decorate([
        $mol_mem
    ], $mol_page.prototype, "Tools", null);
    __decorate([
        $mol_mem
    ], $mol_page.prototype, "Head", null);
    __decorate([
        $mol_mem
    ], $mol_page.prototype, "Body", null);
    __decorate([
        $mol_mem
    ], $mol_page.prototype, "Foot", null);
    $.$mol_page = $mol_page;
})($ || ($ = {}));
//mol/page/-view.tree/page.view.tree.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        const { per, rem } = $mol_style_unit;
        const { calc } = $mol_style_func;
        $mol_style_define($mol_page, {
            display: 'flex',
            flex: {
                basis: 'auto',
                direction: 'column',
            },
            position: 'relative',
            alignSelf: 'stretch',
            maxWidth: per(100),
            maxHeight: per(100),
            boxSizing: 'border-box',
            color: $mol_theme.text,
            ':focus': {
                outline: 'none',
            },
            Head: {
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'flex-end',
                flex: 'none',
                position: 'relative',
                margin: 0,
                minHeight: rem(4),
                padding: $mol_gap.block,
                background: {
                    color: $mol_theme.card,
                },
                border: {
                    radius: $mol_gap.round,
                },
                boxShadow: `0 0.5rem 0.5rem -0.5rem hsla(0,0%,0%,.25)`,
                zIndex: 2,
            },
            Title: {
                minHeight: rem(2),
                margin: 0,
                padding: $mol_gap.text,
                gap: $mol_gap.text,
                wordBreak: 'normal',
                textShadow: '0 0',
                font: {
                    size: 'inherit',
                    weight: 'normal',
                },
                flex: {
                    grow: 1,
                    shrink: 1,
                    basis: 'auto',
                },
            },
            Tools: {
                flex: {
                    basis: 'auto',
                    grow: 1000,
                    shrink: 1,
                },
                display: 'flex',
                justifyContent: 'flex-end',
                alignItems: 'flex-start',
                flexWrap: 'wrap',
            },
            Body: {
                flex: {
                    grow: 1000,
                    shrink: 1,
                    basis: per(100),
                },
                padding: $mol_gap.block,
            },
            Foot: {
                display: 'flex',
                justifyContent: 'space-between',
                flex: 'none',
                margin: 0,
                background: {
                    color: $mol_theme.card,
                },
                border: {
                    radius: $mol_gap.round,
                },
                boxShadow: `0 -0.5rem 0.5rem -0.5rem hsla(0,0%,0%,.25)`,
                zIndex: 1,
                padding: $mol_gap.block,
                ':empty': {
                    display: 'none',
                },
            },
        });
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//mol/page/page.view.css.ts
;
"use strict";
var $;
(function ($) {
    class $mol_keyboard_state extends $mol_plugin {
        event() {
            return {
                ...super.event(),
                keydown: (next) => this.down(next),
                keyup: (next) => this.up(next)
            };
        }
        key() {
            return {};
        }
        down(next) {
            if (next !== undefined)
                return next;
            return null;
        }
        up(next) {
            if (next !== undefined)
                return next;
            return null;
        }
    }
    __decorate([
        $mol_mem
    ], $mol_keyboard_state.prototype, "down", null);
    __decorate([
        $mol_mem
    ], $mol_keyboard_state.prototype, "up", null);
    $.$mol_keyboard_state = $mol_keyboard_state;
})($ || ($ = {}));
//mol/keyboard/state/-view.tree/state.view.tree.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_keyboard_state extends $.$mol_keyboard_state {
            key() {
                return super.key();
            }
            down(event) {
                if (!event)
                    return;
                if (event.defaultPrevented)
                    return;
                let name = $mol_keyboard_code[event.keyCode];
                const handle = this.key()[name];
                if (handle)
                    handle(true);
            }
            up(event) {
                if (!event)
                    return;
                if (event.defaultPrevented)
                    return;
                let name = $mol_keyboard_code[event.keyCode];
                const handle = this.key()[name];
                if (handle)
                    handle(false);
            }
        }
        $$.$mol_keyboard_state = $mol_keyboard_state;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//mol/keyboard/state/state.view.ts
;
"use strict";
var $;
(function ($) {
    class $hyoo_game_arcade extends $mol_stack {
        map() {
            return "🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑\n🛑🛑🟦⚫⚫⚫⚫🟦🎨🟦⚫⚫⚫🟦🎨🟦⚫⚫⚫🟦🎨🟦⚫⚫⚫🟦🎨🟦⚫⚫⚫⚫🟦🛑🛑\n🛑🟦⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫🟦🛑\n🛑⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫🟦⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫🛑\n🛑⚫⚫⚫🟦🎨🟦⚫⚫⚫🟦🎨🟦⚫⚫⚫🟦🟦🟦⚫⚫⚫🟦🎨🟦⚫⚫⚫🟦🎨🟦⚫⚫⚫🛑\n🛑⚫⚫⚫🎨🟦🎨⚫💫⚫🎨🟦🎨⚫💫⚫🟦🟦🟦⚫💫⚫🎨🟦🎨⚫💫⚫🎨🟦🎨⚫⚫⚫🛑\n🛑⚫⚫⚫🟦🎨🟦⚫⚫⚫🟦🎨🟦⚫⚫⚫🟦🟦🟦⚫⚫⚫🟦🎨🟦⚫⚫⚫🟦🎨🟦⚫⚫⚫🛑\n🛑🟦⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫🟦🟦🟦🟦🟦⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫🟦🛑\n🛑🎨⚫⚫⚫💫⚫⚫💫⚫⚫💫⚫⚫⚫🎨🟦🟦🟦🎨⚫⚫⚫💫⚫⚫💫⚫⚫💫⚫⚫⚫🎨🛑\n🛑🟦⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫🟦🟦🟦🟦🟦⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫🟦🛑\n🛑⚫⚫⚫🟦🎨🟦⚫⚫⚫🟦🎨🟦⚫⚫⚫🟦🟦🟦⚫⚫⚫🟦🎨🟦⚫⚫⚫🟦🎨🟦⚫⚫⚫🛑\n🛑⚫⚫⚫🎨🟦🎨⚫💫⚫🎨🟦🎨⚫💫⚫🟦🟦🟦⚫💫⚫🎨🟦🎨⚫💫⚫🎨🟦🎨⚫⚫⚫🛑\n🛑⚫⚫⚫🟦🎨🟦⚫⚫⚫🟦🎨🟦⚫⚫⚫🟦🟦🟦⚫⚫⚫🟦🎨🟦⚫⚫⚫🟦🎨🟦⚫⚫⚫🛑\n🛑⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫🟦⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫🛑\n🛑🟦⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫🟦🛑\n🛑🛑🟦⚫⚫⚫⚫🟦🎨🟦⚫⚫⚫🟦🎨🟦⚫⚫⚫🟦🎨🟦⚫⚫⚫🟦🎨🟦⚫⚫⚫⚫🟦🛑🛑\n🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑";
        }
        place_skins() {
            return {
                "🎨": [
                    "hyoo/game/arcade/texture/meme/1.jpg",
                    "hyoo/game/arcade/texture/meme/2.jpg",
                    "hyoo/game/arcade/texture/meme/3.jpg",
                    "hyoo/game/arcade/texture/meme/4.jpg",
                    "hyoo/game/arcade/texture/meme/5.jpg",
                    "hyoo/game/arcade/texture/meme/6.jpg",
                    "hyoo/game/arcade/texture/meme/7.jpg",
                    "hyoo/game/arcade/texture/meme/8.jpg",
                    "hyoo/game/arcade/texture/meme/9.jpg",
                    "hyoo/game/arcade/texture/meme/10.jpg",
                    "hyoo/game/arcade/texture/meme/11.jpg",
                    "hyoo/game/arcade/texture/meme/12.jpg",
                    "hyoo/game/arcade/texture/meme/13.jpg",
                    "hyoo/game/arcade/texture/meme/14.jpg",
                    "hyoo/game/arcade/texture/meme/15.jpg",
                    "hyoo/game/arcade/texture/meme/16.jpg",
                    "hyoo/game/arcade/texture/meme/17.jpg",
                    "hyoo/game/arcade/texture/meme/18.jpg"
                ],
                "🟦": [
                    "hyoo/game/arcade/texture/wall/0.jpg",
                    "hyoo/game/arcade/texture/wall/1.jpg"
                ],
                "🛑": [
                    "hyoo/game/arcade/texture/border.jpg"
                ]
            };
        }
        spawn_pos() {
            return this.Realm().spawn_pos();
        }
        map_rows() {
            return this.Realm().map_rows();
        }
        map_width() {
            return this.Realm().map_width();
        }
        map_height() {
            return this.Realm().map_height();
        }
        Realm() {
            const obj = new this.$.$hyoo_game_realm();
            obj.map = () => this.map();
            return obj;
        }
        actors() {
            return [
                this.Guy(),
                this.Healer()
            ];
        }
        sub() {
            return [
                this.View(),
                this.Hud()
            ];
        }
        plugins() {
            return [
                this.Control()
            ];
        }
        Square() {
            const obj = new this.$.$mol_3d_shape_square();
            return obj;
        }
        Image(id) {
            const obj = new this.$.$mol_3d_image();
            obj.uri = () => this.image_uri(id);
            return obj;
        }
        walls() {
            return [];
        }
        avatars() {
            return [];
        }
        Wall(id) {
            const obj = new this.$.$mol_3d_object();
            obj.shape = () => this.Square();
            obj.texture = () => this.wall_image(id);
            obj.transform = () => this.wall_trans(id);
            return obj;
        }
        Avatar(id) {
            const obj = new this.$.$mol_3d_object();
            obj.shape = () => this.Square();
            obj.texture = () => this.avaatr_image(id);
            obj.transform = () => this.avatar_trans(id);
            return obj;
        }
        guy_pos() {
            return this.Guy().pos();
        }
        turn_left(next) {
            return this.Guy().turn_left(next);
        }
        turn_right(next) {
            return this.Guy().turn_right(next);
        }
        move_forward(next) {
            return this.Guy().move_forward(next);
        }
        move_backward(next) {
            return this.Guy().move_backward(next);
        }
        move_left(next) {
            return this.Guy().move_left(next);
        }
        move_right(next) {
            return this.Guy().move_right(next);
        }
        guy_angle() {
            return this.Guy().angle();
        }
        Guy() {
            const obj = new this.$.$hyoo_game_actor();
            obj.Realm = () => this.Realm();
            obj.pos_spawn = () => this.spawn_pos();
            return obj;
        }
        Healer() {
            const obj = new this.$.$hyoo_game_actor_ghost();
            obj.Realm = () => this.Realm();
            obj.pos_spawn = () => this.spawn_pos();
            return obj;
        }
        Floor_image() {
            const obj = new this.$.$mol_3d_image();
            obj.uri = () => "hyoo/game/arcade/texture/ground.jpg";
            return obj;
        }
        floor_trans() {
            const obj = new this.$.$mol_3d_mat4();
            return obj;
        }
        Floor() {
            const obj = new this.$.$mol_3d_object();
            obj.shape = () => this.Square();
            obj.texture = () => this.Floor_image();
            obj.transform = () => this.floor_trans();
            return obj;
        }
        ceil_trans() {
            const obj = new this.$.$mol_3d_mat4();
            return obj;
        }
        Ceil() {
            const obj = new this.$.$mol_3d_object();
            obj.shape = () => this.Square();
            obj.texture = () => this.Floor_image();
            obj.transform = () => this.ceil_trans();
            return obj;
        }
        Guy_eye() {
            const obj = new this.$.$hyoo_game_eye();
            obj.Realm = () => this.Realm();
            obj.pos = () => this.guy_pos();
            obj.angle = () => this.guy_angle();
            obj.wireframe = () => this.wireframe();
            obj.objects = () => [
                this.Floor(),
                this.Ceil(),
                ...this.walls(),
                ...this.avatars()
            ];
            return obj;
        }
        View() {
            const obj = new this.$.$mol_view();
            obj.sub = () => [
                this.Guy_eye()
            ];
            return obj;
        }
        title() {
            return "$hyoo_game_arcade";
        }
        Ear() {
            const obj = new this.$.$mol_video_player();
            obj.uri = () => "https://mp3d.jamendo.com/?trackid=1889563&format=mp33";
            obj.loop = () => true;
            obj.autoplay = () => false;
            return obj;
        }
        wireframe(next) {
            if (next !== undefined)
                return next;
            return false;
        }
        Wireframe() {
            const obj = new this.$.$mol_check_box();
            obj.title = () => "Wireframe";
            obj.checked = (next) => this.wireframe(next);
            return obj;
        }
        Sources() {
            const obj = new this.$.$mol_link_source();
            obj.uri = () => "https://github.com/hyoo-ru/game.hyoo.ru";
            return obj;
        }
        stat() {
            return "";
        }
        Hud() {
            const obj = new this.$.$mol_page();
            obj.title = () => this.title();
            obj.tools = () => [
                this.Ear(),
                this.Wireframe(),
                this.Sources()
            ];
            obj.foot = () => [
                this.stat()
            ];
            return obj;
        }
        Control() {
            const obj = new this.$.$mol_keyboard_state();
            obj.key = () => ({
                W: (next) => this.move_forward(next),
                A: (next) => this.move_left(next),
                S: (next) => this.move_backward(next),
                D: (next) => this.move_right(next),
                Q: (next) => this.turn_left(next),
                E: (next) => this.turn_right(next),
                up: (next) => this.move_forward(next),
                left: (next) => this.turn_left(next),
                down: (next) => this.move_backward(next),
                right: (next) => this.turn_right(next),
                pageUp: (next) => this.move_left(next),
                pageDown: (next) => this.move_right(next)
            });
            return obj;
        }
        image_uri(id) {
            return "";
        }
        wall_image(id) {
            const obj = new this.$.$mol_3d_image();
            return obj;
        }
        wall_trans(id) {
            const obj = new this.$.$mol_3d_mat4();
            return obj;
        }
        avaatr_image(id) {
            const obj = new this.$.$mol_3d_image();
            obj.uri = () => "hyoo/game/arcade/texture/healer/0.png";
            return obj;
        }
        avatar_trans(id) {
            const obj = new this.$.$mol_3d_mat4();
            return obj;
        }
    }
    __decorate([
        $mol_mem
    ], $hyoo_game_arcade.prototype, "Realm", null);
    __decorate([
        $mol_mem
    ], $hyoo_game_arcade.prototype, "Square", null);
    __decorate([
        $mol_mem_key
    ], $hyoo_game_arcade.prototype, "Image", null);
    __decorate([
        $mol_mem_key
    ], $hyoo_game_arcade.prototype, "Wall", null);
    __decorate([
        $mol_mem_key
    ], $hyoo_game_arcade.prototype, "Avatar", null);
    __decorate([
        $mol_mem
    ], $hyoo_game_arcade.prototype, "Guy", null);
    __decorate([
        $mol_mem
    ], $hyoo_game_arcade.prototype, "Healer", null);
    __decorate([
        $mol_mem
    ], $hyoo_game_arcade.prototype, "Floor_image", null);
    __decorate([
        $mol_mem
    ], $hyoo_game_arcade.prototype, "floor_trans", null);
    __decorate([
        $mol_mem
    ], $hyoo_game_arcade.prototype, "Floor", null);
    __decorate([
        $mol_mem
    ], $hyoo_game_arcade.prototype, "ceil_trans", null);
    __decorate([
        $mol_mem
    ], $hyoo_game_arcade.prototype, "Ceil", null);
    __decorate([
        $mol_mem
    ], $hyoo_game_arcade.prototype, "Guy_eye", null);
    __decorate([
        $mol_mem
    ], $hyoo_game_arcade.prototype, "View", null);
    __decorate([
        $mol_mem
    ], $hyoo_game_arcade.prototype, "Ear", null);
    __decorate([
        $mol_mem
    ], $hyoo_game_arcade.prototype, "wireframe", null);
    __decorate([
        $mol_mem
    ], $hyoo_game_arcade.prototype, "Wireframe", null);
    __decorate([
        $mol_mem
    ], $hyoo_game_arcade.prototype, "Sources", null);
    __decorate([
        $mol_mem
    ], $hyoo_game_arcade.prototype, "Hud", null);
    __decorate([
        $mol_mem
    ], $hyoo_game_arcade.prototype, "Control", null);
    __decorate([
        $mol_mem_key
    ], $hyoo_game_arcade.prototype, "wall_image", null);
    __decorate([
        $mol_mem_key
    ], $hyoo_game_arcade.prototype, "wall_trans", null);
    __decorate([
        $mol_mem_key
    ], $hyoo_game_arcade.prototype, "avaatr_image", null);
    __decorate([
        $mol_mem_key
    ], $hyoo_game_arcade.prototype, "avatar_trans", null);
    $.$hyoo_game_arcade = $hyoo_game_arcade;
})($ || ($ = {}));
//hyoo/game/arcade/-view.tree/arcade.view.tree.ts
;
"use strict";
var $;
(function ($) {
    const blacklist = new Set([
        '//cse.google.com/adsense/search/async-ads.js'
    ]);
    function $mol_offline() {
        if (typeof window === 'undefined') {
            self.addEventListener('install', (event) => {
                self['skipWaiting']();
            });
            self.addEventListener('activate', (event) => {
                caches.delete('v1');
                caches.delete('$mol_offline');
                self['clients'].claim();
                console.info('$mol_offline activated');
            });
            self.addEventListener('fetch', (event) => {
                const request = event.request;
                if (blacklist.has(request.url.replace(/^https?:/, ''))) {
                    return event.respondWith(new Response(null, {
                        status: 418,
                        statusText: 'Blocked'
                    }));
                }
                if (request.method !== 'GET' || !/^https?:/.test(request.url)) {
                    return event.respondWith(fetch(request));
                }
                const fresh = fetch(event.request).then(response => {
                    event.waitUntil(caches.open('$mol_offline').then(cache => cache.put(event.request, response)));
                    return response.clone();
                });
                event.waitUntil(fresh);
                event.respondWith(caches.match(event.request).then(response => response || fresh));
            });
            self.addEventListener('beforeinstallprompt', (event) => {
                console.log(event);
                event.prompt();
            });
        }
        else if (location.protocol !== 'https:' && location.hostname !== 'localhost') {
            console.warn('HTTPS or localhost is required for service workers.');
        }
        else if (!navigator.serviceWorker) {
            console.warn('Service Worker is not supported.');
        }
        else {
            navigator.serviceWorker.register('web.js');
        }
    }
    $.$mol_offline = $mol_offline;
})($ || ($ = {}));
//mol/offline/offline.web.ts
;
"use strict";
var $;
(function ($) {
    try {
        $mol_offline();
    }
    catch (error) {
        console.error(error);
    }
})($ || ($ = {}));
//mol/offline/install/install.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $hyoo_game_arcade extends $.$hyoo_game_arcade {
            stat() {
                return [
                    `pos: ${this.guy_pos().map(v => v.toFixed(3)).join(' x ')}`,
                    `angle: ${this.guy_angle().toFixed(3)}`,
                    `objects: ${this.Guy_eye().objects().length}`,
                    `shapes: ${this.Guy_eye().groups().size}`,
                    `textures: ${this.Guy_eye().texture_map().size}`,
                ].join(' | ');
            }
            world_items() {
                const map = this.Realm().map_rows();
                const items = [];
                for (let y = 0; y < map.length; ++y) {
                    const row = map[y];
                    for (let x = 0; x < row.length; ++x) {
                        if (row[x] === '⚫')
                            continue;
                        if (map[y + 1]?.[x] === '⚫')
                            items.push({ x, y, kind: map[y][x], side: 0 });
                        if (map[y][x - 1] === '⚫')
                            items.push({ x, y, kind: map[y][x], side: 1 });
                        if (map[y - 1]?.[x] === '⚫')
                            items.push({ x, y, kind: map[y][x], side: 2 });
                        if (map[y][x + 1] === '⚫')
                            items.push({ x, y, kind: map[y][x], side: 3 });
                    }
                }
                return items;
            }
            walls() {
                return this.world_items().map((_, i) => this.Wall(i));
            }
            wall_image(index) {
                const kind = this.world_items()[index].kind;
                const url = $mol_array_lottery(this.place_skins()[kind]);
                return this.Image(url);
            }
            wall_trans(index) {
                const items = this.world_items();
                const { x, y, side } = items[index];
                return $mol_3d_mat4.multiply($mol_3d_mat4.translation([x + .5, -y - .5, 0]), $mol_3d_mat4.scaling([.5, .5, .5]), $mol_3d_mat4.rotation([1, 0, 0], Math.PI / 2), $mol_3d_mat4.rotation([0, 1, 0], side * -Math.PI / 2), $mol_3d_mat4.translation([0, 0, 1]));
            }
            floor_trans() {
                const width = this.map_width();
                const height = this.map_height();
                return $mol_3d_mat4.multiply($mol_3d_mat4.translation([width / 2, -height / 2, -.5]), $mol_3d_mat4.scaling([width / 2, height / 2, 1]));
            }
            ceil_trans() {
                const width = this.map_width();
                const height = this.map_height();
                return $mol_3d_mat4.multiply($mol_3d_mat4.translation([width / 2, -height / 2, .5]), $mol_3d_mat4.scaling([width / 2, -height / 2, 1]));
            }
            square_big_skin() {
                return new Float32Array([
                    0, 20,
                    20, 20,
                    0, 0,
                    20, 0,
                ]);
            }
            image_uri(url) {
                return url;
            }
            avatars() {
                return this.actors().map((_, i) => this.Avatar(i));
            }
            avatar_trans(index) {
                const actor = this.actors()[index];
                const [x, y] = actor.pos();
                return $mol_3d_mat4.multiply($mol_3d_mat4.translation([+x, -y, 0]), $mol_3d_mat4.scaling([.5, .5, .5]), $mol_3d_mat4.rotation([0, 0, 1], -actor.angle()), $mol_3d_mat4.rotation([1, 0, 0], -Math.PI / 2));
            }
            auto() {
                for (const actor of this.actors()) {
                    actor.auto();
                }
            }
        }
        __decorate([
            $mol_mem
        ], $hyoo_game_arcade.prototype, "world_items", null);
        __decorate([
            $mol_mem
        ], $hyoo_game_arcade.prototype, "walls", null);
        __decorate([
            $mol_mem_key
        ], $hyoo_game_arcade.prototype, "wall_image", null);
        __decorate([
            $mol_mem_key
        ], $hyoo_game_arcade.prototype, "wall_trans", null);
        __decorate([
            $mol_mem
        ], $hyoo_game_arcade.prototype, "floor_trans", null);
        __decorate([
            $mol_mem
        ], $hyoo_game_arcade.prototype, "ceil_trans", null);
        __decorate([
            $mol_mem
        ], $hyoo_game_arcade.prototype, "square_big_skin", null);
        __decorate([
            $mol_mem
        ], $hyoo_game_arcade.prototype, "avatars", null);
        __decorate([
            $mol_mem_key
        ], $hyoo_game_arcade.prototype, "avatar_trans", null);
        __decorate([
            $mol_mem
        ], $hyoo_game_arcade.prototype, "auto", null);
        $$.$hyoo_game_arcade = $hyoo_game_arcade;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//hyoo/game/arcade/arcade.view.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        const { rem } = $mol_style_unit;
        $mol_style_define($hyoo_game_arcade, {
            View: {
                alignSelf: 'stretch',
                justifySelf: 'stretch',
            },
            Hud: {
                alignSelf: 'stretch',
                justifySelf: 'stretch',
            },
            Ear: {
                height: rem(2.5),
            },
        });
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//hyoo/game/arcade/arcade.view.css.ts

//# sourceMappingURL=web.js.map
