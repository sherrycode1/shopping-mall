<template>
  <div class="wrapper">
    <ul class="content">
      <button @click="btnClick">BUTTON</button>
      <li>fenleiliebiao1</li>
      <li>fenleiliebiao2</li>
      <li>fenleiliebiao3</li>
      <li>fenleiliebiao4</li>
      <li>fenleiliebiao5</li>
      <li>fenleiliebiao6</li>
      <li>fenleiliebiao7</li>
      <li>fenleiliebiao8</li>
      <li>fenleiliebiao9</li>
      <li>fenleiliebiao10</li>
      <li>fenleiliebiao11</li>
      <li>fenleiliebiao12</li>
      <li>fenleiliebiao13</li>
      <li>fenleiliebiao14</li>
      <li>fenleiliebiao15</li>
      <li>fenleiliebiao16</li>
      <li>fenleiliebiao17</li>
      <li>fenleiliebiao18</li>
      <li>fenleiliebiao19</li>
      <li>fenleiliebiao20</li>
      <li>fenleiliebiao21</li>
      <li>fenleiliebiao22</li>
      <li>fenleiliebiao23</li>
      <li>fenleiliebiao24</li>
      <li>fenleiliebiao25</li>
      <li>fenleiliebiao26</li>
      <li>fenleiliebiao27</li>
      <li>fenleiliebiao28</li>
      <li>fenleiliebiao29</li>
      <li>fenleiliebiao30</li>
      <li>fenleiliebiao31</li>
      <li>fenleiliebiao32</li>
      <li>fenleiliebiao33</li>
      <li>fenleiliebiao34</li>
      <li>fenleiliebiao35</li>
      <li>fenleiliebiao36</li>
      <li>fenleiliebiao37</li>
      <li>fenleiliebiao38</li>
      <li>fenleiliebiao39</li>
      <li>fenleiliebiao40</li>
      <li>fenleiliebiao41</li>
      <li>fenleiliebiao42</li>
      <li>fenleiliebiao43</li>
      <li>fenleiliebiao44</li>
      <li>fenleiliebiao45</li>
      <li>fenleiliebiao46</li>
      <li>fenleiliebiao47</li>
      <li>fenleiliebiao48</li>
      <li>fenleiliebiao49</li>
      <li>fenleiliebiao50</li>
      <li>fenleiliebiao51</li>
      <li>fenleiliebiao52</li>
      <li>fenleiliebiao53</li>
      <li>fenleiliebiao54</li>
      <li>fenleiliebiao55</li>
      <li>fenleiliebiao56</li>
      <li>fenleiliebiao57</li>
      <li>fenleiliebiao58</li>
      <li>fenleiliebiao59</li>
      <li>fenleiliebiao60</li>
      <li>fenleiliebiao61</li>
      <li>fenleiliebiao62</li>
      <li>fenleiliebiao63</li>
      <li>fenleiliebiao64</li>
      <li>fenleiliebiao65</li>
      <li>fenleiliebiao66</li>
      <li>fenleiliebiao67</li>
      <li>fenleiliebiao68</li>
      <li>fenleiliebiao69</li>
      <li>fenleiliebiao70</li>
      <li>fenleiliebiao71</li>
      <li>fenleiliebiao72</li>
      <li>fenleiliebiao73</li>
      <li>fenleiliebiao74</li>
      <li>fenleiliebiao75</li>
      <li>fenleiliebiao76</li>
      <li>fenleiliebiao77</li>
      <li>fenleiliebiao78</li>
      <li>fenleiliebiao79</li>
      <li>fenleiliebiao80</li>
      <li>fenleiliebiao81</li>
      <li>fenleiliebiao82</li>
      <li>fenleiliebiao83</li>
      <li>fenleiliebiao84</li>
      <li>fenleiliebiao85</li>
      <li>fenleiliebiao86</li>
      <li>fenleiliebiao87</li>
      <li>fenleiliebiao88</li>
      <li>fenleiliebiao89</li>
      <li>fenleiliebiao90</li>
      <li>fenleiliebiao91</li>
      <li>fenleiliebiao92</li>
      <li>fenleiliebiao93</li>
      <li>fenleiliebiao94</li>
      <li>fenleiliebiao95</li>
      <li>fenleiliebiao96</li>
      <li>fenleiliebiao97</li>
      <li>fenleiliebiao98</li>
      <li>fenleiliebiao99</li>
      <li>fenleiliebiao100</li>
    </ul>
  </div>
</template>

<script>
import BScroll from "better-scroll";
export default {
  data() {
    return {
      scroll: null,
    };
  },
  // created 拿不到元素
  mounted() {
    this.scroll = new BScroll(".wrapper", {
      probeType: 3,
      pullUpLoad: true,

    });
    this.scroll.on("scroll", () => {
      // console.log(pos);
    });

    this.scroll.on("pullingUp", () => {
      console.log("get more info");
    });
  },
  methods: {
    btnClick() {
      console.log("i am button");
    },
  },
};
</script>

<style>
.wrapper {
  /* height: 150px; */
  height: 300px;
  background-color: #ffc0cb;
  overflow: hidden;
}
</style>