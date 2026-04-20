# Conventions within this project

## Naming

The project uses naming conventions in order to ensure consistency and logic. The following naming conventions are well know and often used in large scale projects for easy scaleability

### ClassNames (BEM)

For classnames we use the CSS BEM method.
BEM (Block Element Modifier) uses modifiers on top of already defined elements. This makes for very detailed CSS that can be used anywhere within the project.

For examples check: [The introduction to BEM](https://getbem.com/introduction/)

### Blognames

Blogs in md. files are shown differenlty on the wiki which is why it will use a different convention for naming compared to other files. Instead of sepparating words with camelCase ( will be mentioned later) markdown files wil sepparte word with a dash e.g. new-blog. whilst capetalised letter don't matter or affect the layout of the md it should be in lowercase just for consistent naming.

### Functions, filenames etc

Functions, filenames and other naming scenario's outside of classnames and blogs are using the camelCase method.

It is commonly used for variables, functions, and methods, often starting with a lowercase letter like: camelCaseFunction

## Blogs

Blog are md files downloaded from the wiki:
The blogs can contain small mardown mistakes which can have a devastating impact on the html conversion breaking the whole page. To ensure everything works the following should be checked:

1. The language in code snippets should be listed in lowercase (highlight plugin).
2. A thorough search should be conducted to ensure the markdown semantics are correct.
3. After downloading, a blog should have the (mandatory) collection details (E.g. Title and tags) included.

### collection (blog items)

The data of the collection should always be written in lowercase. The same goes for the data that goes inside the tag. Mixing it with uppercase is inconsistent and could create duplicate buttons and filters. Therefore you should consider using lowercase only despite there being checks.

## Fallbacks

Within the projects there should be enough fallbacks for if things like are failing (take the API call or markdownit plugin for example).

In order to give the developer and user feedback there should be handlers to check if data is coming through and if not a message should be displayed to let the user know something is wrong.

Console.logs should be removed unless they are needed throughout the development (Log if api limit has been reached to save time instead of wasting time on debugging)
