'use strict';

define('allthemats/tests/adapters/application.jshint.lint-test', [], function () {
  'use strict';

  QUnit.module('JSHint | adapters/application.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'adapters/application.js should pass jshint.\nadapters/application.js: line 1, col 54, Missing semicolon.\nadapters/application.js: line 2, col 48, Missing semicolon.\nadapters/application.js: line 11, col 23, Missing semicolon.\nadapters/application.js: line 12, col 55, Missing semicolon.\nadapters/application.js: line 14, col 55, Missing semicolon.\nadapters/application.js: line 17, col 21, Missing semicolon.\nadapters/application.js: line 20, col 3, Missing semicolon.\nadapters/application.js: line 7, col 9, \'Ember\' is not defined.\nadapters/application.js: line 9, col 12, \'Ember\' is not defined.\n\n9 errors');
  });
});
define('allthemats/tests/app.jshint.lint-test', [], function () {
  'use strict';

  QUnit.module('JSHint | app.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app.js should pass jshint.');
  });
});
define('allthemats/tests/components/email-input.jshint.lint-test', [], function () {
  'use strict';

  QUnit.module('JSHint | components/email-input.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'components/email-input.js should pass jshint.\ncomponents/email-input.js: line 1, col 26, Missing semicolon.\ncomponents/email-input.js: line 6, col 3, Missing semicolon.\n\n2 errors');
  });
});
define('allthemats/tests/components/password-input.jshint.lint-test', [], function () {
  'use strict';

  QUnit.module('JSHint | components/password-input.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'components/password-input.js should pass jshint.\ncomponents/password-input.js: line 1, col 26, Missing semicolon.\ncomponents/password-input.js: line 6, col 3, Missing semicolon.\n\n2 errors');
  });
});
define('allthemats/tests/components/row-header.jshint.lint-test', [], function () {
  'use strict';

  QUnit.module('JSHint | components/row-header.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'components/row-header.js should pass jshint.\ncomponents/row-header.js: line 1, col 26, Missing semicolon.\ncomponents/row-header.js: line 4, col 3, Missing semicolon.\n\n2 errors');
  });
});
define('allthemats/tests/components/sign-in-form.jshint.lint-test', [], function () {
  'use strict';

  QUnit.module('JSHint | components/sign-in-form.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'components/sign-in-form.js should pass jshint.\ncomponents/sign-in-form.js: line 1, col 26, Missing semicolon.\ncomponents/sign-in-form.js: line 9, col 57, Missing semicolon.\ncomponents/sign-in-form.js: line 13, col 34, Missing semicolon.\ncomponents/sign-in-form.js: line 16, col 3, Missing semicolon.\n\n4 errors');
  });
});
define('allthemats/tests/helpers/destroy-app', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = destroyApp;

  function destroyApp(application) {
    _ember['default'].run(application, 'destroy');
  }
});
define('allthemats/tests/helpers/destroy-app.jshint.lint-test', [], function () {
  'use strict';

  QUnit.module('JSHint | helpers/destroy-app.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/destroy-app.js should pass jshint.');
  });
});
define('allthemats/tests/helpers/flash-message', ['exports', 'ember-cli-flash/flash/object'], function (exports, _emberCliFlashFlashObject) {

  _emberCliFlashFlashObject['default'].reopen({ init: function init() {} });
});
define('allthemats/tests/helpers/flash-message.jshint.lint-test', [], function () {
  'use strict';

  QUnit.module('JSHint | helpers/flash-message.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/flash-message.js should pass jshint.');
  });
});
define('allthemats/tests/helpers/module-for-acceptance', ['exports', 'qunit', 'allthemats/tests/helpers/start-app', 'allthemats/tests/helpers/destroy-app'], function (exports, _qunit, _allthematsTestsHelpersStartApp, _allthematsTestsHelpersDestroyApp) {
  exports['default'] = function (name) {
    var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

    (0, _qunit.module)(name, {
      beforeEach: function beforeEach() {
        this.application = (0, _allthematsTestsHelpersStartApp['default'])();

        if (options.beforeEach) {
          options.beforeEach.apply(this, arguments);
        }
      },

      afterEach: function afterEach() {
        if (options.afterEach) {
          options.afterEach.apply(this, arguments);
        }

        (0, _allthematsTestsHelpersDestroyApp['default'])(this.application);
      }
    });
  };
});
define('allthemats/tests/helpers/module-for-acceptance.jshint.lint-test', [], function () {
  'use strict';

  QUnit.module('JSHint | helpers/module-for-acceptance.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/module-for-acceptance.js should pass jshint.');
  });
});
define('allthemats/tests/helpers/resolver', ['exports', 'allthemats/resolver', 'allthemats/config/environment'], function (exports, _allthematsResolver, _allthematsConfigEnvironment) {

  var resolver = _allthematsResolver['default'].create();

  resolver.namespace = {
    modulePrefix: _allthematsConfigEnvironment['default'].modulePrefix,
    podModulePrefix: _allthematsConfigEnvironment['default'].podModulePrefix
  };

  exports['default'] = resolver;
});
define('allthemats/tests/helpers/resolver.jshint.lint-test', [], function () {
  'use strict';

  QUnit.module('JSHint | helpers/resolver.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/resolver.js should pass jshint.');
  });
});
define('allthemats/tests/helpers/start-app', ['exports', 'ember', 'allthemats/app', 'allthemats/config/environment'], function (exports, _ember, _allthematsApp, _allthematsConfigEnvironment) {
  exports['default'] = startApp;

  function startApp(attrs) {
    var application = undefined;

    var attributes = _ember['default'].merge({}, _allthematsConfigEnvironment['default'].APP);
    attributes = _ember['default'].merge(attributes, attrs); // use defaults, but you can override;

    _ember['default'].run(function () {
      application = _allthematsApp['default'].create(attributes);
      application.setupForTesting();
      application.injectTestHelpers();
    });

    return application;
  }
});
define('allthemats/tests/helpers/start-app.jshint.lint-test', [], function () {
  'use strict';

  QUnit.module('JSHint | helpers/start-app.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/start-app.js should pass jshint.');
  });
});
define('allthemats/tests/integration/components/email-input-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleForComponent)('email-input', 'Integration | Component | email input', {
    integration: true
  });

  (0, _emberQunit.test)('it renders', function (assert) {

    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    this.render(Ember.HTMLBars.template({
      'id': '6ZlF6XfM',
      'block': '{"statements":[["append",["unknown",["email-input"]],false]],"locals":[],"named":[],"yields":[],"blocks":[],"hasPartials":false}',
      'meta': {}
    }));

    assert.equal(this.$().text().trim(), '');

    // Template block usage:
    this.render(Ember.HTMLBars.template({
      'id': 'YM0cFao3',
      'block': '{"statements":[["text","\\n"],["block",["email-input"],null,null,0],["text","  "]],"locals":[],"named":[],"yields":[],"blocks":[{"statements":[["text","      template block text\\n"]],"locals":[]}],"hasPartials":false}',
      'meta': {}
    }));

    assert.equal(this.$().text().trim(), 'template block text');
  });
});
define('allthemats/tests/integration/components/email-input-test.jshint.lint-test', [], function () {
  'use strict';

  QUnit.module('JSHint | integration/components/email-input-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/email-input-test.js should pass jshint.');
  });
});
define('allthemats/tests/integration/components/password-input-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleForComponent)('password-input', 'Integration | Component | password input', {
    integration: true
  });

  (0, _emberQunit.test)('it renders', function (assert) {

    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    this.render(Ember.HTMLBars.template({
      'id': 'qKa4/eNs',
      'block': '{"statements":[["append",["unknown",["password-input"]],false]],"locals":[],"named":[],"yields":[],"blocks":[],"hasPartials":false}',
      'meta': {}
    }));

    assert.equal(this.$().text().trim(), '');

    // Template block usage:
    this.render(Ember.HTMLBars.template({
      'id': 'zLQB4Ctb',
      'block': '{"statements":[["text","\\n"],["block",["password-input"],null,null,0],["text","  "]],"locals":[],"named":[],"yields":[],"blocks":[{"statements":[["text","      template block text\\n"]],"locals":[]}],"hasPartials":false}',
      'meta': {}
    }));

    assert.equal(this.$().text().trim(), 'template block text');
  });
});
define('allthemats/tests/integration/components/password-input-test.jshint.lint-test', [], function () {
  'use strict';

  QUnit.module('JSHint | integration/components/password-input-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/password-input-test.js should pass jshint.');
  });
});
define('allthemats/tests/integration/components/row-header-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleForComponent)('row-header', 'Integration | Component | row header', {
    integration: true
  });

  (0, _emberQunit.test)('it renders', function (assert) {

    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    this.render(Ember.HTMLBars.template({
      'id': '+Kw9dG0+',
      'block': '{"statements":[["append",["unknown",["row-header"]],false]],"locals":[],"named":[],"yields":[],"blocks":[],"hasPartials":false}',
      'meta': {}
    }));

    assert.equal(this.$().text().trim(), '');

    // Template block usage:
    this.render(Ember.HTMLBars.template({
      'id': '86AAzF//',
      'block': '{"statements":[["text","\\n"],["block",["row-header"],null,null,0],["text","  "]],"locals":[],"named":[],"yields":[],"blocks":[{"statements":[["text","      template block text\\n"]],"locals":[]}],"hasPartials":false}',
      'meta': {}
    }));

    assert.equal(this.$().text().trim(), 'template block text');
  });
});
define('allthemats/tests/integration/components/row-header-test.jshint.lint-test', [], function () {
  'use strict';

  QUnit.module('JSHint | integration/components/row-header-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/row-header-test.js should pass jshint.');
  });
});
define('allthemats/tests/integration/components/sign-in-form-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleForComponent)('sign-in-form', 'Integration | Component | sign in form', {
    integration: true
  });

  (0, _emberQunit.test)('it renders', function (assert) {

    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    this.render(Ember.HTMLBars.template({
      'id': 'iWgfKNlK',
      'block': '{"statements":[["append",["unknown",["sign-in-form"]],false]],"locals":[],"named":[],"yields":[],"blocks":[],"hasPartials":false}',
      'meta': {}
    }));

    assert.equal(this.$().text().trim(), '');

    // Template block usage:
    this.render(Ember.HTMLBars.template({
      'id': '0kWL1c/7',
      'block': '{"statements":[["text","\\n"],["block",["sign-in-form"],null,null,0],["text","  "]],"locals":[],"named":[],"yields":[],"blocks":[{"statements":[["text","      template block text\\n"]],"locals":[]}],"hasPartials":false}',
      'meta': {}
    }));

    assert.equal(this.$().text().trim(), 'template block text');
  });
});
define('allthemats/tests/integration/components/sign-in-form-test.jshint.lint-test', [], function () {
  'use strict';

  QUnit.module('JSHint | integration/components/sign-in-form-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/sign-in-form-test.js should pass jshint.');
  });
});
define('allthemats/tests/resolver.jshint.lint-test', [], function () {
  'use strict';

  QUnit.module('JSHint | resolver.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'resolver.js should pass jshint.');
  });
});
define('allthemats/tests/router.jshint.lint-test', [], function () {
  'use strict';

  QUnit.module('JSHint | router.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'router.js should pass jshint.');
  });
});
define('allthemats/tests/routes/application.jshint.lint-test', [], function () {
  'use strict';

  QUnit.module('JSHint | routes/application.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/application.js should pass jshint.');
  });
});
define('allthemats/tests/routes/sign-in.jshint.lint-test', [], function () {
  'use strict';

  QUnit.module('JSHint | routes/sign-in.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'routes/sign-in.js should pass jshint.\nroutes/sign-in.js: line 1, col 26, Missing semicolon.\nroutes/sign-in.js: line 2, col 24, Missing semicolon.\nroutes/sign-in.js: line 9, col 36, Missing semicolon.\nroutes/sign-in.js: line 19, col 58, Missing semicolon.\nroutes/sign-in.js: line 20, col 9, Missing semicolon.\nroutes/sign-in.js: line 23, col 3, Missing semicolon.\n\n6 errors');
  });
});
define('allthemats/tests/serializers/application.jshint.lint-test', [], function () {
  'use strict';

  QUnit.module('JSHint | serializers/application.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/application.js should pass jshint.');
  });
});
define('allthemats/tests/services/ajax.jshint.lint-test', [], function () {
  'use strict';

  QUnit.module('JSHint | services/ajax.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'services/ajax.js should pass jshint.\nservices/ajax.js: line 1, col 26, Missing semicolon.\nservices/ajax.js: line 2, col 51, Missing semicolon.\nservices/ajax.js: line 3, col 48, Missing semicolon.\nservices/ajax.js: line 11, col 23, Missing semicolon.\nservices/ajax.js: line 12, col 55, Missing semicolon.\nservices/ajax.js: line 14, col 55, Missing semicolon.\nservices/ajax.js: line 17, col 21, Missing semicolon.\nservices/ajax.js: line 20, col 3, Missing semicolon.\n\n8 errors');
  });
});
define('allthemats/tests/services/auth.jshint.lint-test', [], function () {
  'use strict';

  QUnit.module('JSHint | services/auth.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'services/auth.js should pass jshint.\nservices/auth.js: line 1, col 26, Missing semicolon.\nservices/auth.js: line 2, col 49, Missing semicolon.\nservices/auth.js: line 18, col 7, Missing semicolon.\nservices/auth.js: line 31, col 56, Missing semicolon.\nservices/auth.js: line 32, col 62, Missing semicolon.\nservices/auth.js: line 33, col 62, Missing semicolon.\nservices/auth.js: line 34, col 7, Missing semicolon.\nservices/auth.js: line 45, col 7, Missing semicolon.\nservices/auth.js: line 50, col 52, Missing semicolon.\nservices/auth.js: line 52, col 3, Missing semicolon.\n\n10 errors');
  });
});
define('allthemats/tests/storages/auth.jshint.lint-test', [], function () {
  'use strict';

  QUnit.module('JSHint | storages/auth.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'storages/auth.js should pass jshint.\nstorages/auth.js: line 1, col 61, Missing semicolon.\nstorages/auth.js: line 4, col 3, Missing semicolon.\n\n2 errors');
  });
});
define('allthemats/tests/test-helper', ['exports', 'allthemats/tests/helpers/resolver', 'allthemats/tests/helpers/flash-message', 'ember-qunit'], function (exports, _allthematsTestsHelpersResolver, _allthematsTestsHelpersFlashMessage, _emberQunit) {

  (0, _emberQunit.setResolver)(_allthematsTestsHelpersResolver['default']);
});
define('allthemats/tests/test-helper.jshint.lint-test', [], function () {
  'use strict';

  QUnit.module('JSHint | test-helper.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'test-helper.js should pass jshint.');
  });
});
define('allthemats/tests/unit/adapters/application-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('adapter:application', 'Unit | Adapter | application', {
    // Specify the other units that are required for this test.
    // needs: ['serializer:foo']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var adapter = this.subject();
    assert.ok(adapter);
  });
});
define('allthemats/tests/unit/adapters/application-test.jshint.lint-test', [], function () {
  'use strict';

  QUnit.module('JSHint | unit/adapters/application-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/adapters/application-test.js should pass jshint.');
  });
});
define('allthemats/tests/unit/routes/application-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:application', 'Unit | Route | application', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('allthemats/tests/unit/routes/application-test.jshint.lint-test', [], function () {
  'use strict';

  QUnit.module('JSHint | unit/routes/application-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/application-test.js should pass jshint.');
  });
});
define('allthemats/tests/unit/routes/sign-in-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:sign-in', 'Unit | Route | sign in', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('allthemats/tests/unit/routes/sign-in-test.jshint.lint-test', [], function () {
  'use strict';

  QUnit.module('JSHint | unit/routes/sign-in-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/sign-in-test.js should pass jshint.');
  });
});
define("allthemats/tests/unit/serializers/application-test", ["exports"], function (exports) {});
define('allthemats/tests/unit/serializers/application-test.jshint.lint-test', [], function () {
  'use strict';

  QUnit.module('JSHint | unit/serializers/application-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/serializers/application-test.js should pass jshint.');
  });
});
define('allthemats/tests/unit/services/ajax-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('service:ajax', 'Unit | Service | ajax', {
    // Specify the other units that are required for this test.
    // needs: ['service:foo']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var service = this.subject();
    assert.ok(service);
  });
});
define('allthemats/tests/unit/services/ajax-test.jshint.lint-test', [], function () {
  'use strict';

  QUnit.module('JSHint | unit/services/ajax-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/services/ajax-test.js should pass jshint.');
  });
});
define('allthemats/tests/unit/services/auth-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('service:auth', 'Unit | Service | auth', {
    // Specify the other units that are required for this test.
    // needs: ['service:foo']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var service = this.subject();
    assert.ok(service);
  });
});
define('allthemats/tests/unit/services/auth-test.jshint.lint-test', [], function () {
  'use strict';

  QUnit.module('JSHint | unit/services/auth-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/services/auth-test.js should pass jshint.');
  });
});
require('allthemats/tests/test-helper');
EmberENV.TESTS_FILE_LOADED = true;
//# sourceMappingURL=tests.map
