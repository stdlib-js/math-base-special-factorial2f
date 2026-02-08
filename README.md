<!--

@license Apache-2.0

Copyright (c) 2025 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# factorial2f

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Evaluate the [double factorial][double-factorial] function as a single-precision floating-point number.

<section class="intro">

The [double factorial][double-factorial] of a number `n`, denoted `n!!`, is defined as the product of all the positive integers up to `n` that have the same parity (odd or even) as `n`.

Thus, for example, `5!!` is `5 * 3 * 1 = 15` and `8!!` is `8 * 6 * 4 * 2 = 384`.

</section>

<!-- /.intro -->



<section class="usage">

## Usage

To use in Observable,

```javascript
factorial2f = require( 'https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-factorial2f@umd/browser.js' )
```
The previous example will load the latest bundled code from the umd branch. Alternatively, you may load a specific version by loading the file from one of the [tagged bundles](https://github.com/stdlib-js/math-base-special-factorial2f/tags). For example,

```javascript
factorial2f = require( 'https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-factorial2f@v0.1.1-umd/browser.js' )
```

To vendor stdlib functionality and avoid installing dependency trees for Node.js, you can use the UMD server build:

```javascript
var factorial2f = require( 'path/to/vendor/umd/math-base-special-factorial2f/index.js' )
```

To include the bundle in a webpage,

```html
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-factorial2f@umd/browser.js"></script>
```

If no recognized module system is present, access bundle contents via the global scope:

```html
<script type="text/javascript">
(function () {
    window.factorial2f;
})();
</script>
```

#### factorial2f( n )

Evaluates the [double factorial][double-factorial] of `n` as a single-precision floating-point number.

```javascript
var v = factorial2f( 3 );
// returns 3

v = factorial2f( 4 );
// returns 8

v = factorial2f( 10 );
// returns 3840
```

If `n > 56`, the function returns `NaN`, as larger [double factorial][double-factorial] values cannot be safely represented in [single-precision floating-point format][ieee754].

```javascript
var v = factorial2f( 57 );
// returns Infinity
```

If not provided a nonnegative integer value, the function returns `NaN`.

```javascript
var v = factorial2f( 3.14 );
// returns NaN

v = factorial2f( -1 );
// returns NaN
```

If provided `NaN`, the function returns `NaN`.

```javascript
var v = factorial2f( NaN );
// returns NaN
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```html
<!DOCTYPE html>
<html lang="en">
<body>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/random-array-discrete-uniform@umd/browser.js"></script>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/console-log-each-map@umd/browser.js"></script>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-factorial2f@umd/browser.js"></script>
<script type="text/javascript">
(function () {

var x = discreteUniform( 10, 0, 56, {
    'dtype': 'int32'
});

logEachMap( 'factorial2f(%d) = %0.1f', x, factorial2f );

})();
</script>
</body>
</html>
```

</section>

<!-- /.examples -->

<!-- C interface documentation. -->



<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2026. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/math-base-special-factorial2f.svg
[npm-url]: https://npmjs.org/package/@stdlib/math-base-special-factorial2f

[test-image]: https://github.com/stdlib-js/math-base-special-factorial2f/actions/workflows/test.yml/badge.svg?branch=v0.1.1
[test-url]: https://github.com/stdlib-js/math-base-special-factorial2f/actions/workflows/test.yml?query=branch:v0.1.1

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/math-base-special-factorial2f/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/math-base-special-factorial2f?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/math-base-special-factorial2f.svg
[dependencies-url]: https://david-dm.org/stdlib-js/math-base-special-factorial2f/main

-->

[chat-image]: https://img.shields.io/badge/zulip-join_chat-brightgreen.svg
[chat-url]: https://stdlib.zulipchat.com

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/math-base-special-factorial2f/tree/deno
[deno-readme]: https://github.com/stdlib-js/math-base-special-factorial2f/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/math-base-special-factorial2f/tree/umd
[umd-readme]: https://github.com/stdlib-js/math-base-special-factorial2f/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/math-base-special-factorial2f/tree/esm
[esm-readme]: https://github.com/stdlib-js/math-base-special-factorial2f/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/math-base-special-factorial2f/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/math-base-special-factorial2f/main/LICENSE

[double-factorial]: https://en.wikipedia.org/wiki/Double_factorial

[ieee754]: https://en.wikipedia.org/wiki/IEEE_754-1985

<!-- <related-links> -->

<!-- </related-links> -->

</section>

<!-- /.links -->
