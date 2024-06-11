#### 你需要每次到这个页面都加载script脚本的话 需要这样写

需要你写监听`astro:page-load`事件 不然astro只会更新变动的部分

```js
  <script>
    console.debug("ggggg", new Date().toISOString());

    import { annotate, annotationGroup } from "rough-notation";
    document.addEventListener("astro:page-load", () => {
      const notions = document.querySelectorAll("span[data-notion-identity]");
      console.log(notions, "notions");
      const annotations = new Array(notions.length).fill(0).map((_, index) => {
        const node = notions[index] as HTMLSpanElement;
        const type = node.dataset.notionType;
        const color = node.dataset.notionColor;
        const strokeWidth = node.dataset.notionStrokewidth;
        return annotate(node, {
          type: (type as "underline") ?? "underline",
          color: color ?? "red",
          animate: false,
          multiline: type === "bracket" ? false : true,
          brackets: ["left", "right"],
          strokeWidth: Number(strokeWidth) ?? 1.5,
        });
      });
      annotationGroup(annotations).show();
    });
  </script>
```
