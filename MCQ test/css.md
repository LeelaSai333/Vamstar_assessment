                                      CSS

Q1. Among these selectors which selector has the highest specificity ranking for selecting the anchor link element?
```css
ul li a
a 
.example a 
div a
```
- [x] `.example a`
- [ ] `div a`
- [ ] `a`
- [ ] `ul li a`

Q2. Using an attribute selector, how would you select an `<a>` element with a "title" attribute?
- [x] `a[title]{...}`
- [ ] `a > title {...}` 
- [ ] `a.title {...}`
- [ ] `a=title {...}`

Q3. What is the CSS selector for an `<a>` tag containing the title attribute?
- [x] `a[title]`
- [ ] `a > title` 
- [ ] `a=title` 
- [ ] `a.title`

Q4. CSS grid and flexbox are now becoming a more popular way to create page layouts. However, floats are still commonly used, especially when working with an older code base, or if you need to support older browser version. What are two valid techniques used to clear floats?
- [ ] Use the "clearfix hack" on the floated element and add a float to the parent element.
- [ ] Use the overflow property on the floated element or the "clearfix hack" on either the floated or parent element.
- [ ] Use the "clearfix hack" on the floated element or the overflow property on the parent element.
- [x] Use the "clearfix hack" on the parent element or use the overflow property with a value other than "visible."

Q5. What element(s) do the following selectors match to?
```css
1) .nav {
...; }
2) nav { ...;
}
3) #nav {
...; }
```
- [ ] ```markdown
1. An element with an ID of "nav"
2. A nav element
3. An element with a class of "nav"```

- [ ] ```markdown
They all target the same nav element. ```

- [x] ```markdown
1. An element with an class of "nav"
2. A nav element
3. An element with a id of "nav"``` 

- [ ] ```markdown
1. An element with an class of "nav" 
2. A nav element
3. An div with a id of "nav"```
