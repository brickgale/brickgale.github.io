<template>
    <div class="about-profile np">
        <div class="row">
            <div class="col-xs-12 col-md-6">
                <div class="box-con">
                    <h3><i class="fa fa-briefcase"></i>Work History</h3>
                    <ul class="timeline">
                        <li v-for="job in work_history">
                            <span></span>
                            <div class="content">
                                <p class="main">
                                    {{ job.title }}
                                </p>
                                <p class="sub">{{ job.position }}</p>
                            </div>
                            <span class="timestamp">
                                <span>{{ job.to }}</span>
                                <span>{{ job.from }}</span>
                            </span>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="col-xs-12 col-md-6">
                <div class="box-con">
                    <h3><i class="fa fa-graduation-cap"></i>Eduation</h3>
                    <ul class="timeline">
                        <li v-for="sy in education">
                            <span></span>
                            <div class="content">
                                <p class="main">
                                    {{ sy.title }}
                                </p>
                                <p class="sub">{{ sy.address }}</p>
                            </div>
                            <span class="timestamp">
                                <span>{{ sy.to }}</span>
                                <span>{{ sy.from }}</span>
                            </span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">

    const education = [
        {
            from: '2000',
            to: '2005',
            title: 'Bankal - Elementary \n(1st-3rd grade and 6th grade)',
            address: 'Bankal, Lapu-Lapu City, Cebu'
        },
        {
            from: '2005',
            to: '2009',
            title: 'CIC Mandaue - Highschool',
            address: 'Tipolo, Mandaue City, Cebu'
        },
        {
            from: '2009',
            to: '2013',
            title: 'Holy Name University - BSIT',
            address: 'Tagbilaran City, Bohol'
        },
    ]

    const work_history = [
        {
            from: 'Apr 2013',
            to: 'Nov 2013',
            title: 'iCreative Solution',
            position: 'Web Developer'
        },
        {
            from: 'Nov 2013',
            to: 'Feb 2014',
            title: 'QLICK & PAIR',
            position: 'Web Developer'
        },
        {
            from: 'Mar 2014',
            to: 'Feb 2015',
            title: 'NextIx Inc',
            position: 'Senior Software Engineer'
        },
        {
            from: 'Mar 2015',
            to: 'Aug 2016',
            title: 'Nerubia Web Solutions Inc',
            position: 'Full Stack Web Developer'
        },
        {
            from: 'Aug 2016',
            to: 'Nov 2016',
            title: 'Sliding Monkey Web Development',
            position: 'Full Stack Web Developer'
        },
        {
            from: 'Jan 2017',
            to: 'Aug 2018',
            title: 'Monstarlab Philippines',
            position: 'Full Stack Web Developer'
        },
        {
            from: 'Aug 2018',
            to: 'Dec 2024',
            title: 'Moebius Co Ltd',
            position: 'Frontend Web Developer'
        },
    ]

    //somehow if put on v-for it will reset on switching pages
    work_history.reverse()
    education.reverse()

</script>

<style lang="scss" src="./index.scss" />