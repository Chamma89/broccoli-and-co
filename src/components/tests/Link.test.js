import React from "react";
import Main from "../Main";

it("Testing API", async function () {
  const response = new Main();
  console.warn(await response.api());

  expect("hello").toEqual("hello");
});

const sum = jest.fn(() => 3);

// test("adds 1 + 2 to equal 3", () => {
//   expect(sum(1, 2)).toBe(3);
// });

test("something", () => {
  expect(sum(1, 2)).toBe(3);
  expect(sum(1, 2)).toBe(3);
  expect(sum).toHaveBeenCalledWith(1, 2);
});

// // Link.react.test.js
// import React from "react";
// import renderer from "react-test-renderer";
// import Link from "../Link.react";

// test("Link changes the class when hovered", () => {
//   const component = renderer.create(
//     <Link page="http://www.facebook.com">Facebook</Link>
//   );
//   let tree = component.toJSON();
//   expect(tree).toMatchSnapshot();

//   // manually trigger the callback
//   tree.props.onMouseEnter();
//   // re-rendering
//   tree = component.toJSON();
//   expect(tree).toMatchSnapshot();

//   // manually trigger the callback
//   tree.props.onMouseLeave();
//   // re-rendering
//   tree = component.toJSON();
//   expect(tree).toMatchSnapshot();
// });
