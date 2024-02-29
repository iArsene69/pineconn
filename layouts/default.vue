<template>
    <div class="min-h-full">
        <div class="grid grid-cols-12 mx-auto gap-2 sm:px-6 lg:max-w-7xl lg:px-8 lg:gap-5">

            <div class="hidden xl:block xl:col-span-3">
                <div class="sticky top-0">
                    <SidebarLeft />
                </div>
            </div>
            <main class="col-span-12 xl:col-span-6">

                <slot />
            </main>

            <div class="hidden xl:block xl:col-span-3">
                <div class="sticky top-0">
                    <SidebarRight />
                </div>
            </div>
        </div>
        <UIDialog :isOpen="postThreadModal" @on-close="closeThreadModal">
            <ThreadForm :replyTo="replyThread" showReply :user="auth.authUser.value" />
        </UIDialog>
    </div>
</template>

<script setup>
const { postThreadModal, closeThreadModal, replyThread } = useThread()
const auth = useAuth()


</script>
