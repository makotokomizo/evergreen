// import Component from "@reach/component-component";

// <Component initialState={{ hue: 0 }}>
//   {({ setState, state }) => (
//     <div style={{ textAlign: "center" }}>
//       <button onClick={() => setState({ hue: Math.random() * 360 })}>
//         Generate Triad Colorscheme
//       </button>
//       <br />
//       {[1, 2, 3].map((n) => (
//         <div
//           key={n}
//           style={{
//             display: "inline-block",
//             margin: 10,
//             width: "2em",
//             height: "2em",
//             borderRadius: "50%",
//             background: `hsl(${state.hue + n * 120}, 50%, 50%)`,
//             transition: "background-color 200ms ease",
//           }}
//         />
//       ))}
//     </div>
//   )}
// </Component>