import React from 'react';

const BasicInfoForm = () => {
  return (
    <div>
      <div className="basic-caption">
        <h1>Let's get started!</h1>
        <p>Make your project stand out with a captivating tite and image</p>
      </div>
      <form>
        <section>
          <input type="text"></input>
        </section>
        <section>
          <textarea />
        </section>
        <section>
          <button>Category</button>
        </section>
        <section>
          <input type="text"></input>
        </section>
        <section>Number of days
          <input type="text"></input>
        </section>
        <section>Funding goal
          <input type="text"></input>
        </section>
      </form>
    </div>
  );
};
