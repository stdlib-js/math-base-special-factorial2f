# CHANGELOG

> Package changelog.

<section class="release" id="unreleased">

## Unreleased (2025-09-07)

<section class="features">

### Features

-   [`4eaa59f`](https://github.com/stdlib-js/stdlib/commit/4eaa59f1a7e2754d24e8cd2f417a7dd82cf50cdc) - add `math/base/special/factorial2f` [(#6736)](https://github.com/stdlib-js/stdlib/pull/6736)

</section>

<!-- /.features -->

<section class="breaking-changes">

### BREAKING CHANGES

-   [`9f18e41`](https://github.com/stdlib-js/stdlib/commit/9f18e41cfb9c374786e413d455fc513f705c237e): update signature to accept floats

    -   User code should behave similarly in the primary case of providing integer-valued input values. However, no longer will real-values truncate. Now, real-valued inputs will result in `NaN`, which is, arguably, better behavior, as real-to-integer truncation can be a source of silent bugs.

</section>

<!-- /.breaking-changes -->

<section class="commits">

### Commits

<details>

-   [`9f18e41`](https://github.com/stdlib-js/stdlib/commit/9f18e41cfb9c374786e413d455fc513f705c237e) - **refactor:** modify C implementation to accept `float` instead of `int32` in `math/base/special/factorial2f` [(#8030)](https://github.com/stdlib-js/stdlib/pull/8030) _(by Gunj Joshi, Athan Reines)_
-   [`0fa9b00`](https://github.com/stdlib-js/stdlib/commit/0fa9b008fe7ee4d7dbb699cb225700aaf761dcb6) - **chore:** add structured package data for `math/base/special/factorial2f` [(#8024)](https://github.com/stdlib-js/stdlib/pull/8024) _(by Lokesh Ranjan, Athan Reines)_
-   [`5519603`](https://github.com/stdlib-js/stdlib/commit/551960360bdcf61a473e5844ce23c7c9f7717168) - **docs:** fix example code and return annotation values _(by Philipp Burckhardt)_
-   [`4eaa59f`](https://github.com/stdlib-js/stdlib/commit/4eaa59f1a7e2754d24e8cd2f417a7dd82cf50cdc) - **feat:** add `math/base/special/factorial2f` [(#6736)](https://github.com/stdlib-js/stdlib/pull/6736) _(by Karan Anand, Athan Reines)_

</details>

</section>

<!-- /.commits -->

<section class="contributors">

### Contributors

A total of 5 people contributed to this release. Thank you to the following contributors:

-   Athan Reines
-   Gunj Joshi
-   Karan Anand
-   Lokesh Ranjan
-   Philipp Burckhardt

</section>

<!-- /.contributors -->

</section>

<!-- /.release -->

