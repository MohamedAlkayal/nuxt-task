import { defaultConfig } from "@formkit/vue";
import { ar } from "@formkit/i18n";
import { rootClasses } from "./formkit.theme";

export default defaultConfig({
  config: {
    rootClasses,
  },
  locales: { ar },
  locale: "ar",
});
