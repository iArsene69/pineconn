<template>
    <div class="flex flex-col">
        <div class="relative m-2">
            <div class="absolute flex items-center h-full pl-2 cursor-pointer">
                <Icon name="iconoir:input-search" />
            </div>
            <input placeholder="Search" v-model="search"
                class="flex h-9 items-center w-full pl-8 text-sm font-normal text-foreground rounded-md border border-theme bg-background px-3 py-1 shadow-sm transition-colors placeholder:text-foreground/40 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-theme disabled:cursor-not-allowed  disabled:opacity-50">
        </div>

        <SidebarRightPreviewCard title="what the actual shit?!">
            <SidebarRightPreviewCardItem v-for="whatsHappening in whatsHappeningItems">
                <div>
                    <h2 class="font-bold text-lg text-foreground">{{ whatsHappening.title }}</h2>

                    <p class="text-sm text-foreground/80">
                        {{ whatsHappening.count }}
                    </p>
                </div>
            </SidebarRightPreviewCardItem>
        </SidebarRightPreviewCard>

        <SidebarRightPreviewCard title="Who to follow">
            <SidebarRightPreviewCardItem v-for="whoToFollow in whoToFollowItems">
                <div class="flex flex-row items-center gap-2 p-2">
                    <img class="w-10 h-10 rounded-full" :src="whoToFollow.image" :alt="whoToFollow.name">

                    <div class="flex flex-col ml-2">
                        <h1 class="text-lg font-bold">{{ whoToFollow.name }}</h1>
                        <p class="text-sm text-foreground/80">{{ whoToFollow.handle }}</p>
                    </div>
                </div>
            </SidebarRightPreviewCardItem>
        </SidebarRightPreviewCard>

        <footer>
            Footer WIP
        </footer>
    </div>
</template>

<script setup>
const whatsHappeningItems = ref([
    {
        title: 'SpaceX',
        count: '18.8k Tweets'
    },
    {
        title: '#CodingIsFun',
        count: '8.8k Tweets'
    },
    {
        title: '#artforall',
        count: '1.8k Tweets'
    }
])

const whoToFollowItems = ref([
    {
        name: 'Mirza Fatah',
        handle: '@mikopostme',
        image: 'https://picsum.photos/200/200'
    },
    {
        name: 'Gweh',
        handle: '@dummy.gweh',
        image: 'https://picsum.photos/200/200'
    },
    {
        name: 'Non-existent being',
        handle: '@iamyou',
        image: 'https://picsum.photos/200/200'
    }
])
</script>