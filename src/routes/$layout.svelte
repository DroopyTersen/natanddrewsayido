<script>
import Header from "../components/Header.svelte";
(function(history){
    var pushState = history.pushState;
    history.pushState = function(...args) {
      console.log("history.pushState -> args", args)
      setTimeout(() => window.dispatchEvent(new Event('locationchange')), 0);
      return pushState.apply(history, args);
    };
    window.addEventListener("popstate", () => {
      setTimeout(() => window.dispatchEvent(new Event('locationchange')), 0);
    })
})(window.history);
</script>

<Header/>
<slot></slot>