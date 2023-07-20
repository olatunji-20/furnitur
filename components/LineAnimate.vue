<template>
  <div>
    <div class="border-4 border-blue-500 w-[100%] h-[auto]">
        <div class="w-[70%] h-[10px] mx-[auto] flex justify-between relative top-[6px]">
            <div class="border-2 border-blue-500 w-[12px] h-[12px] rounded-full bg-blue-600"></div>
            <div class="border-2 border-blue-500 w-[12px] h-[12px] rounded-full bg-blue-600"></div>
            <div class="border-2 border-blue-500 w-[12px] h-[12px] rounded-full bg-blue-600"></div>
            <div class="border-2 border-blue-500 w-[12px] h-[12px] rounded-full bg-blue-600"></div>
        </div>

        <div class="line">
            <div :class="stage"></div>
        </div>

        <div class="border-2 border-red-500 w-[85%] h-[auto] mx-[auto] flex justify-between">
            <div class="border-2 border-blue-500 w-[220px] h-[150px] font-bold text-3xl"><h1>1</h1></div>
            <div class="border-2 border-blue-500 w-[220px] h-[150px] font-bold text-3xl"><h1>2</h1></div>
            <div class="border-2 border-blue-500 w-[220px] h-[150px] font-bold text-3xl"><h1>3</h1></div>
            <div class="border-2 border-blue-500 w-[220px] h-[150px] font-bold text-3xl"><h1>4</h1></div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
    props: {
        stage: String
    }
}
</script>

<style>
.line {
    background: red;
    width: 70%;
    height: 4px;
    margin: 0px auto 1rem;
}
.stage1 {
    width: 25%;
    height: 4px;
    background: blue;
    animation: animate1 1s ease-in;
}
.stage2 {
    width: 50%;
    height: 4px;
    background: blue;
    animation: animate2 1s ease-in;
}
.stage3 {
    width: 75%;
    height: 4px;
    background: blue;
    animation: animate3 1s ease-in;
}
.stage4 {
    width: 100%;
    height: 4px;
    background: blue;
    animation: animate4 1s ease-in;
}
@keyframes animate1 {
    0% {
        width: 0%
    }
    100% {
        width: 25%;
    }
}
@keyframes animate2 {
    0% {
        width: 25%
    }
    100% {
        width: 50%;
    }
}
@keyframes animate3 {
    0% {
        width: 50%
    }
    100% {
        width: 75%;
    }
}
@keyframes animate4 {
    0% {
        width: 75%
    }
    100% {
        width: 100%;
    }
}
</style>