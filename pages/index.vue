<template>
    <div>
        <MainSection title="What's today">
            <Head>
                <Title>Home / What's today?</Title>
            </Head>

            <div class="border-b border-foreground/40">
                <ThreadForm :user="auth.authUser.value" @on-success="handleFormSuccess" />
            </div>
            List
        </MainSection>
    </div>
</template>

<script setup>
const auth = useAuth()

function handleFormSuccess(thread){
    //TODO: handle success
}
</script>