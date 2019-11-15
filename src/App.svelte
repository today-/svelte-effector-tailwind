<script>
  import {Router, Route} from "svelte-routing";
  import News from "./News/News.svelte";
  import Layout from "./Layout/Layout.svelte";
  import NewsDetails from "./NewsDetails/NewsDetails.svelte";
  import Page404 from "./Page404/Page404.svelte";

  export let url = "";
</script>

<Router url="{url}">
  <Layout>
    <Route path="/:id" component={NewsDetails}/>
    <Route path="/" component={News}/>
    <Route component={Page404}/>
  </Layout>
</Router>
