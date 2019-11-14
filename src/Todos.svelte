<script>
  const ENTER_KEY = 13;
  const ESCAPE_KEY = 27;

  let items = [];
  let editing = null;

  function clearCompleted() {
    items = items.filter(item => !item.completed);
  }

  function remove(index) {
    items = items.slice(0, index).concat(items.slice(index + 1));
  }

  function toggleAll(event) {
    items = items.map(item => ({
      id: item.id,
      description: item.description,
      completed: event.target.checked
    }));
  }

  function createNew(event) {
    if (event.which === ENTER_KEY) {
      items = items.concat({
        id: uuid(),
        description: event.target.value,
        completed: false
      });
      event.target.value = '';
    }
  }

  function handleEdit(event) {
    if (event.which === ENTER_KEY) {
      event.target.blur();
    } else if (event.which === ESCAPE_KEY) editing = null;
  }

  function submit(event) {
    items[editing].description = event.target.value;
    editing = null;
  }

  function uuid() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
      var r = Math.random() * 16 | 0, v = c === 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
  }

  $: numActive = items.filter(item => !item.completed).length;
  $: numCompleted = items.filter(item => item.completed).length;
</script>

<header class="header">
  <input
      class="new-todo"
      on:keydown={createNew}
      placeholder="What needs to be done?"
  >
</header>

{#if items.length > 0}
  <section class="main">
    <input
        id="toggle-all"
        class="toggle-all"
        type="checkbox" on:change={toggleAll} checked={numCompleted === items.length}>
    <label for="toggle-all">Mark all as complete</label>

    <ul class="todo-list">
        {#each items as item, index (item.id)}
          <li class="{item.completed ? 'completed' : ''} {editing === index ? 'editing' : ''}">
            <div class="view">
              <input class="toggle" type="checkbox" bind:checked={item.completed}>
              <label on:dblclick="{() => editing = index}">{item.description}</label>
              <button on:click="{() => remove(index)}" class="destroy"></button>
            </div>

              {#if editing === index}
                <input
                    value='{item.description}'
                    id="edit"
                    class="edit"
                    on:keydown={handleEdit}
                    on:blur={submit}
                >
              {/if}
          </li>
        {/each}
    </ul>

    <footer class="footer">
			<span class="todo-count">
				<strong>{numActive}</strong> {numActive === 1 ? 'item' : 'items'} left
			</span>

        {#if numCompleted}
          <button class="clear-completed" on:click={clearCompleted}>
            Clear completed
          </button>
        {/if}
    </footer>
  </section>
{/if}
