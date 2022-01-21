import Application from 'auto-import-build-error/app';
import config from 'auto-import-build-error/config/environment';
import { setApplication } from '@ember/test-helpers';
import { start } from 'ember-qunit';

setApplication(Application.create(config.APP));

start();
