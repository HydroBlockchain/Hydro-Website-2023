<script>
  import item from "$lib/json/whitepapers.json";
</script>

<div class="full" id="card-background">
  <div class="left">
    <div class="building-statement">
      Anyone can build ontop of the Hydro Protocols, Start with our whitepapers!
    </div>
  </div>
  <div class="right">
    <div class="protocol-row">
      <a href={item[0].link} target="_blank" rel="noopener noreferrer">
        <div class="protocol-card" id="card-background-alt">Raindrop</div>
      </a>
      <a href={item[1].link} target="_blank" rel="noopener noreferrer">
        <div class="protocol-card" id="card-background-alt">Snowflake</div>
      </a>
    </div>
    <div class="protocol-row">
      <a href={item[2].link} target="_blank" rel="noopener noreferrer">
        <div class="protocol-card" id="card-background-alt">Ice</div>
      </a>
      <a href={item[3].link} target="_blank" rel="noopener noreferrer">
        <div class="protocol-card" id="card-background-alt">Tide</div>
      </a>
      <a href={item[4].link} target="_blank" rel="noopener noreferrer">
        <div class="protocol-card" id="card-background-alt">Keresia</div>
      </a>
    </div>
  </div>
</div>

<style>
  .full {
    height: 10rem;
    flex-direction: row;
  }

  .left {
    margin: var(--zero);
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 50%;
  }

  .right {
    margin: var(--zero);
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: 50%;
  }

  .protocol-row {
    display: flex;
    justify-content: center;
    flex-direction: row;
  }

  .protocol-card {
    display: flex;
    justify-content: center;
    align-items: center;
    width: auto;
    padding: var(--padding-standard);
    margin: var(--margin-half);
  }

  .building-statement {
    display: flex;
    justify-content: center;
    margin: var(--margin-alt);
    font-size: var(--fs-xlarge);
  }

  /* Extra small devices (phones, 600px and down) */
  @media only screen and (max-width: 600px) {
    .full {
      height: auto;
      flex-direction: column;
      padding-top: var(--padding-standard);
      padding-bottom: var(--padding-standard);
    }

    .protocol-row {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: row;
    }

    .right,
    .left {
      margin: var(--zero);
      display: flex;
      flex-direction: column;
      justify-content: center;
      width: 300px;
    }

    .protocol-card {
      width: auto;
      margin: var(--margin-half);
    }

    .building-statement {
      font-size: var(--fs-medium);
      margin: var(--margin-half);
    }
  }

  @media only screen and (max-width: 768px) {
    .full {
      height: auto;
      flex-direction: column;
      padding-top: var(--padding-standard);
      padding-bottom: var(--padding-standard);
    }

    .protocol-row {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: row;
    }

    .right,
    .left {
      margin: var(--zero);
      display: flex;
      flex-direction: column;
      justify-content: center;
      width: 300px;
    }

    .protocol-card {
      width: auto;
      margin: var(--margin-half);
    }

    .building-statement {
      font-size: var(--fs-medium);
      margin: var(--margin-half);
    }
  }

  @media only screen and (max-width: 992px) {
    .full {
      height: auto;
      flex-direction: column;
      padding-top: var(--padding-standard);
      padding-bottom: var(--padding-standard);
    }

    .protocol-row {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: row;
    }

    .right,
    .left {
      margin: var(--zero);
      display: flex;
      flex-direction: column;
      justify-content: center;
      width: 300px;
    }

    .protocol-card {
      width: auto;
      margin: var(--margin-half);
    }

    .building-statement {
      font-size: var(--fs-medium);
      margin: var(--margin-half);
    }
  }

  @media only screen and (max-width: 1200px) {
    .full {
      height: auto;
      flex-direction: column;
      padding-top: var(--padding-standard);
      padding-bottom: var(--padding-standard);
    }

    .protocol-row {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: row;
    }

    .right,
    .left {
      margin: var(--zero);
      display: flex;
      flex-direction: column;
      justify-content: center;
      width: 300px;
    }

    .protocol-card {
      width: auto;
      margin: var(--margin-half);
    }

    .building-statement {
      font-size: var(--fs-medium)x;
      margin: var(--margin-half);
    }
  }
</style>
