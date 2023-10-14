import { ref as c, computed as s, onMounted as f, watch as k, resolveComponent as m, openBlock as i, createBlock as v, normalizeClass as u, withCtx as p, renderSlot as d, createElementBlock as _ } from "vue";
import { useRoute as g } from "vue-router";
const y = (e, n) => {
  const o = e.__vccOpts || e;
  for (const [t, a] of n)
    o[t] = a;
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
  setup(e) {
    const n = g(), o = c(!1), t = c(!0), a = s(() => typeof e.to == "string" ? e.to : e.to.path), l = () => {
      const h = a.value;
      setTimeout(() => {
        o.value = n.path === h;
      }, e.changed);
    }, r = () => {
      t.value && (t.value = !1, e.throttle > 0 ? setTimeout(() => {
        t.value = !0;
      }, e.throttle) : t.value = !0);
    };
    return f(l), k(() => n.path, l), {
      isActive: s(() => n.path === a.value),
      isChanged: o,
      isThrottled: t,
      handle: r
    };
  }
};
function A(e, n, o, t, a, l) {
  const r = m("router-link");
  return t.isChanged ? (i(), _("span", {
    key: 1,
    class: u({
      link: !0,
      "link-active": t.isActive
    })
  }, [
    d(e.$slots, "default")
  ], 2)) : (i(), v(r, {
    key: 0,
    onClick: t.handle,
    to: o.to,
    class: u({
      link: !0,
      "link-active": t.isActive,
      "link-throttled": !t.isThrottled
    })
  }, {
    default: p(() => [
      d(e.$slots, "default")
    ]),
    _: 3
  }, 8, ["onClick", "to", "class"]));
}
const B = /* @__PURE__ */ y(C, [["render", A]]);
export {
  B as default
};
