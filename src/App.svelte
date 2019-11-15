<script>
  import Page404 from "./Page404/Page404.svelte";
  import { Router, Route } from "svelte-routing";
  import Layout from "./Layout/Layout.svelte";
  import News from "./News/News.svelte";

  export let url = "";
</script>

<Router url="{url}">
  <Layout>
    <Route path="/"><News/></Route>
    <Route><Page404/></Route>
  </Layout>
</Router>
