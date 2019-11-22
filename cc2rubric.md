# Code Challenge 2 Rubric

## Minimum Bar

Create a form that instantiates an object with an association along with the models, migrations, routes, controllers, and views needed to facilitate the form.

## Rubric

### Routes

| Score | Evidence |
| :--: | --- |
| 1 | Routes attempted for show, new, and create but completely off base - invented names, not following REST. |
| 2 | Some of the correct routes created, names follow REST. |
| 3 | All necessary routes created but also has unused routes. |
| 4 | Only created the routes used in the app. |
| 5 | Created nested routes and used them properly. |

### Models

| Score | Evidence |
| :--: | --- |
| 1 | Added extra models and tried to use the models for controller actions. |
| 2 | Lacks understanding of ActiveRecord (included unnecessary methods such as initialize or attr_accessor). |
| 3 | Nothing written in the Model except for associations and validations. |
| 4 | Nothing written in the Model except for associations and validations. |
| 5 | There is an input field in the new object form to create a new associated object, accepts nested forms for an associated object on the original model. |

### Associations

| Score | Evidence |
| :--: | --- |
| 1 | No associations, no foreign key on the table. |
| 2 | Associations attempted in the model but are incorrect, foreign key is on the table but in the wrong spot. Multiple sources of truth (shoveling instances of associated objects into an array on the orginal model to associate). |
| 3 | Foreign key for `associated_object_id` is on the object table. Associations lead to the correct behavior but may have used an incorrect macro or manually written out the methods the macro implicitly builds. |
| 4 | Foreign key for `associated_object_id` is on the object table. Correct association macros used. |
| 5 | Foreign key for `associated_object_id` is on the object table. Correct association macros used. |

### Validations

| Score | Evidence |
| :--: | --- |
| 1 | No validations. |
| 2 | Incorrect validations. |
| 3 | Uses `if/else` logic to implement validations. Does not use built-in validation methods. |
| 4 | Makes use of built-in validation methods. |
| 5 | Extra validations implemented. |

### Controllers

| Score | Evidence |
| :--: | --- |
| 1 | If methods are even present, they are named unconventionally or doing work beyond the responsibility of the method. |
| 2 | Trouble accessing params properly, attempts but does not successfully create new instances. Renders unnecessary pages. |
| 3 | Doesn’t use mass assignment but does properly create a new instance with params. Doesn’t check if the instance saves before rendering show page. Only sets the necessary instance variables to send to views. |
| 4 | Uses mass assignment. Uses ActiveRecord SQL methods to find the objects for the search feature. Has an `if object/associated_object.save` catch in place when creating a new instance. |
| 5 | Uses controller filter callbacks to DRY controller actions. |

### Views

| Score | Evidence |
| :--: | --- |
| 1 | Missing views, not displaying all data in the needed pages. Trying to call bare words or methods in views that aren’t attached to an instance variable. View files for page-less controller actions. |
| 2 | All views exist, but may have added files for views they aren’t using. Instance variables not passed into the views but they’re trying to call on them anyway. Tried to call on the associated objects to show in the object page but didn’t do it correctly. Used ERB tags inconsistently and/or incorrectly. |
| 3 | All views exist, may have added files for views they aren’t using. Instance variables passed in and used correctly to display the information. Objects and associated objects are correctly linked to their respective show pages. No mistakes on display vs. evaluative ERB tags. Maybe you got everything to display correctly but in a weird, roundabout way, like unnecessary evaluation on the associated object class to render associated objects for a single object rather than calling object.associated_object.name. |
| 4 | Only the views asked for in the instructions exist. All information is correctly displayed and used the methods given by ActiveRecord. |
| 5 | Extra views created and used correctly, such as showing all the objects associated with the associated object on the associated object page. |

### Forms

| Score | Evidence |
| :--: | --- |
| 1 | No forms created. Forms created on the wrong views. Forms attempted but badly mangled and would most likely break the page if you tried to load it. |
| 2 | Mixing syntax for `form_tag` and `form_for`, or used a `form_tag` instead of `form_for`. Attempted but didn’t get the dropdown to work for the associated model. |
| 3 | Used form_for for `@object`. Dropdown works to select an existing superpower but implementation is messy. |
| 4 | Clean implementation of `form_for` with a dropdown that selects an existing associated object. |
| 5 | Clean implementation and added an input field to create a new associated object using `fields_for` or similar. |

### Search (bonus)

| Score | Evidence |
| :--: | --- |
| 1 | No search implemented or attempted. |
| 2 | Search attempted but incomplete. |
| 3 | Search implemented but code is messy/doesn’t work. |
| 4 | Search correctly implemented. |
| 5 | Search correctly implemented with added feature (filter checkboxes, etc.). |
