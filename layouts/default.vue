<template>
    <div class="">
        <div class="grid grid-cols-12 mx-auto gap-2 sm:px-6 lg:max-w-7xl lg:px-8 lg:gap-5">

            <div class="hidden md:block md:col-span-2 xl:col-span-3">
                <div class="sticky top-0">
                    <SidebarLeft />
                </div>
            </div>

            <slot />

            <div class="hidden md:block xl:col-span-3 md:col-span-2">
                <div class="sticky top-0">
                   <SidebarRight />
                </div>
            </div>
        </div>
    </div>
</template>
