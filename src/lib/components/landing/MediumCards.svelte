<script>
  // @ts-nocheck
  import { mediumData } from "$lib/store/store";
  import Time from "svelte-time";

  function truncateString(str, num) {
  return str;
}


</script>

<div class="three-quarter" id="card-background">
  <div class="blog-column" id="first-blog-post-column">
    <a
      class="blog-link"
      href={$mediumData.mediumLinkOne}
      target="_blank"
      rel="noopener noreferrer"
    >
      <div class="blog-card" id="card-background-alt">
        <!-- svelte-ignore missing-declaration -->
        <div class="blog-title">
          {$mediumData.mediumTitleOne.slice(0, 40)}
        </div>
        <div class="pub-date">
          <Time timestamp={$mediumData.mediumPubOne} format="MM/DD" />
        </div>
      </div>
    </a>
    <a
      class="blog-link"
      href={$mediumData.mediumLinkTwo}
      target="_blank"
      rel="noopener noreferrer"
    >
      <div class="blog-card" id="card-background-alt">
        <div class="blog-title">
          {$mediumData.mediumTitleTwo.slice(0, 40)}
        </div>
        <div class="pub-date">
          <Time timestamp={$mediumData.mediumPubTwo} format="MM/DD" />
        </div>
      </div>
    </a>
    <a
      class="blog-link"
      href={$mediumData.mediumLinkThree}
      target="_blank"
      rel="noopener noreferrer"
    >
      <div class="blog-card" id="card-background-alt">
        <div class="blog-title">
          {$mediumData.mediumTitleThree.slice(0, 40)}
        </div>
        <div class="pub-date">
          <Time timestamp={$mediumData.mediumPubThree} format="MM/DD" />
        </div>
      </div>
    </a>
  </div>
  <div class="blog-column" id="second-blog-post-column">
    <a
      class="blog-link"
      href={$mediumData.mediumLinkFour}
      target="_blank"
      rel="noopener noreferrer"
    >
      <div class="blog-card" id="card-background-alt">
        <div class="blog-title">
          {$mediumData.mediumTitleFour.slice(0, 40)}
        </div>
        <div class="pub-date">
          <Time timestamp={$mediumData.mediumPubFour} format="MM/DD" />
        </div>
      </div>
    </a>
    <a
      class="blog-link"
      href={$mediumData.mediumLinkFive}
      target="_blank"
      rel="noopener noreferrer"
    >
      <div class="blog-card" id="card-background-alt">
        <div class="blog-title">
          {$mediumData.mediumTitleFive.slice(0, 40)}
        </div>
        <div class="pub-date">
          <Time timestamp={$mediumData.mediumPubFive} format="MM/DD" />
        </div>
      </div>
    </a>
    <a
      class="blog-link"
      href={$mediumData.mediumLinkSix.slice(0, 40)}
      target="_blank"
      rel="noopener noreferrer"
    >
      <div class="blog-card" id="card-background-alt">
        <div class="blog-title">
          {$mediumData.mediumTitleSix}
        </div>
        <div class="pub-date">
          <Time timestamp={$mediumData.mediumPubSix} format="MM/DD" />
        </div>
      </div>
    </a>
  </div>
</div>

<style>
  .three-quarter {
    height: 15rem;
  }

  .blog-column {
    display: flex;
    flex-direction: row;
  }

  .blog-link {
    width: 100%;
    font-size: var(--fs-mini);
    cursor: pointer;
    color: var(--link-color);
  }

  .blog-card {
    display: flex;
    flex-direction: row;
    width: 200px;
    height: 50px;
    padding: var(--padding-standard);
    margin: var(--margin-half);
    background-color: var(--card-background-alt);
    border-radius: var(--border-radius);
  }

  .blog-card:hover {
    background-color: var(--button-hover) !important;
  }

  .blog-title {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: start;
    font-size: var(--fs-xsmall);
    text-overflow: ellipsis;
  }

  .pub-date {
    font-size: var(--fs-mini);
    align-items: flex-start;
    color: var(--text-color-alt);
  }

  /* Extra small devices (phones, 600px and down) */
  @media only screen and (max-width: 600px) {
    .three-quarter {
      height: auto;
      flex-direction: row;
    }

    .blog-column {
      flex-direction: column;
    }

    #first-blog-post-column {
      margin-left: var(--margin-standard);
    }

    #second-blog-post-column {
      margin-right: var(--margin-standard);
    }

    .blog-card {
      width: 120px !important;
      height: 70px !important;
      word-wrap: break-word;
      padding: var(--padding-half);
    }
  }

  @media only screen and (max-width: 768px) {
    .three-quarter {
      height: auto;
      flex-direction: row;
    }

    .blog-column {
      flex-direction: column;
      margin-top: var(--margin-standard);
      margin-bottom: var(--margin-standard);
    }

    .blog-card {
      width: 250px;
      height: 50px;
      word-wrap: break-word;
    }
  }
</style>
