<template>
<div class="font-sans antialiased">
    <div class="inline-block min-w-full overflow-hidden rounded-lg shadow">
        <table class="min-w-full leading-normal">
            <thead>
                <tr>
                    <th v-for="row in rows" :key="row" class="px-5 py-3 text-xs font-semibold tracking-wider text-left text-gray-600 uppercase bg-gray-100 border-b-2 border-gray-200">
                        {{row}}
                    </th>
                    <th class="px-5 py-3 text-xs font-semibold tracking-wider text-left text-gray-600 uppercase bg-gray-100 border-b-2 border-gray-200">
                       Ações 
                    </th>
                </tr>
            </thead>
            <tbody>
               <tr v-for="item in data.data" :key="item.id">
                    <td v-for="row in rows" :key="row" class="px-5 py-5 text-sm bg-white border-b border-gray-200">
                        <p class="text-gray-900 whitespace-no-wrap">{{item[row]}}</p>
                    </td>
                    
                    <td class="px-5 py-5 text-sm bg-white border-b border-gray-200">
                        <inertia-link :href="editResolve(item.id)"
                            class="relative inline-block px-3 py-1 font-semibold leading-tight text-yellow-900 cursor-pointer">
                            <span aria-hidden
                                class="absolute inset-0 bg-yellow-200 rounded-full opacity-50"></span>
                            <span class="relative">Editar</span>
                        </inertia-link>
                        <button @click="deleteItem(item.id)"
                            class="relative inline-block px-3 py-1 ml-3 font-semibold leading-tight text-red-900 cursor-pointer">
                            <span aria-hidden
                                class="absolute inset-0 bg-red-200 rounded-full opacity-50"></span>
                            <span class="relative">Deletar</span>
                        </button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</div>

</template>

<script>
export default {
    props: {
        rows: Object,
        data: Object,
        routes: {
            default: {
                edit: 'test',
                delete: 'test',
            },
            type: Object
        }
    },
    methods: {
        editResolve: function(id) {
            return route(this.routes.edit, id);
        },
        deleteResolve: function(id) {
            return route(this.routes.delete, id);
        },
        deleteItem: function (id) {
           const confirm = window.confirm('Do you really want to delete?');
           if (confirm) {
                this.$inertia.delete(this.deleteResolve(id));               
           }
        }
    }
};
</script>

<style scoped>
</style>