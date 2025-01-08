<template>
    <div>
        <NavBar></NavBar>
        <!-- Home Section -->
        <section id="home" class="text-center py-5 bg-light">
            <h1 class="display-4">Crafting Digital Dreams</h1>
            <p class="lead mt-3">elcome to my portfolio! I’m a creative developer transforming ideas into stunning web
                experiences.</p>
            <a href="#projects" class="btn btn-lg mt-4 px-4"
                style="background-color: #FF5733; color: white; border: none;">View My Work</a>
        </section>

        <!-- About Section -->
        <section id="about" class="container py-5">
            <div class="row">
                <div class="col-md-6 mb-5 img-col">
                    <img src="/img/me.jpeg" alt="Ahmed Gharib" class="img-fluid">
                </div>

                <div class="col-md-6">
                    <h2 class="mb-4">About Me</h2>
                    <p class="lead">
                        Hello! I’m a dedicated software developer with a strong foundation in building modern,
                        responsive web applications that deliver seamless user experiences. My journey in the tech world
                        has been fueled by a passion for problem-solving and a relentless drive to stay updated with the
                        latest trends and technologies.
                    </p>
                    <SkillsBar></SkillsBar>
                </div>
            </div>
        </section>

        <!-- Projects Section -->
        <section id="projects" class="bg-light py-5">
            <div class="container">
                <h2 class="mb-4 Project-sec-title">Commercial projects I've Built!</h2>
                <div class="row">
                    <ProjectCard></ProjectCard>
                </div>
            </div>
        </section>

        <!-- Contact Section -->
        <section id="contact" class="py-5">
            <div class="container">
                <h2 style="color: #FF5733; font-weight: bold;">Contact Me</h2>
                <EmailForm />
            </div>
        </section>
        <AppFooter></AppFooter>
    </div>
</template>


<script setup lang="ts">

</script>

<style lang="scss" scoped>
* {
    font-family: 'helvetica';
    .row {
        margin-right: 0;
        margin-left: 0;
    }
}

.img-col {
    display: flex;
    justify-content: center;
    align-items: center;
}

.col-md-6 img {
    max-width: 400px;
    width: 100%;
    border-radius: 20%;
    border: 5px solid rgb(255, 87, 51);
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}

.Project-sec-title {
    text-align: center;
    color: #FF5733;
    font-weight: bold;
    font-size: 2rem;
    margin-bottom: 2rem;
}
</style>