import { ref as c, computed as i, onMounted as f, watch as p, resolveComponent as k, openBlock as s, createElementBlock as u, normalizeClass as m, createBlock as _, withCtx as v, renderSlot as d } from "vue";
import { useRoute as g } from "vue-router";
const y = (t, n) => {
  const o = t.__vccOpts || t;
  for (const [e, a] of n)
    o[e] = a;
  return o;
}, C = {
  name: "AppLink",
  props: {
    to: {
      type: [String, Object],
      required: !0
    },
    throttle: {
      type: Number,
      default: 0
    },
    changed: {
      type: Number,
      default: 50
    }
  },
  setup(t) {
    const n = g(), o = c(!1), e = c(!0), a = i(() => typeof t.to == "string" ? t.to : t.to.path), l = () => {
      const h = a.value;
      setTimeout(() => {
        o.value = n.path === h;
      }, t.changed);
    }, r = () => {
      e.value && (e.value = !1, t.throttle > 0 ? setTimeout(() => {
        e.value = !0;
      }, t.throttle) : e.value = !0);
    };
    return f(l), p(() => n.path, l), {
      isActive: i(() => n.path === a.value),
      isChanged: o,
      isThrottled: e,
      handle: r
    };
  }
}, A = { key: 1 };
function T(t, n, o, e, a, l) {
  const r = k("router-link");
  return s(), u("span", {
    class: m({
      link: !0,
      "link-active": e.isActive,
      "link-throttled": !e.isThrottled
    })
  }, [
    e.isChanged ? (s(), u("span", A, [
      d(t.$slots, "default")
    ])) : (s(), _(r, {
      key: 0,
      onClick: e.handle,
      to: o.to
    }, {
      default: v(() => [
        d(t.$slots, "default")
      ]),
      _: 3
    }, 8, ["onClick", "to"]))
  ], 2);
}
const w = /* @__PURE__ */ y(C, [["render", T]]);
export {
  w as default
};
