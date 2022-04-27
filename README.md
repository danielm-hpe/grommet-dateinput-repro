# Purpose

This repo is a minimal repro of a behavior seen in grommet 2.22.0's DateInput where the date is off by one when running tests locally, unless the timezone is explicitly set to UTC

For example, `yarn test` fails locally, but `TZ=UTC yarn test` passes

In CI/CD `yarn test` passed presumably because the timezone exposed to the test runner was UTC.

When viewed in the local browser after `yarn start`, the behavior of the DateInput control is as expected- selecting a date shows the date selected.