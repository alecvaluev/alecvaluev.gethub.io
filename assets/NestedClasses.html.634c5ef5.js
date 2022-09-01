import{_ as n,o as s,c as a,f as e}from"./app.0b3735d6.js";const t={},p=e(`<h1 id="nested-classes" tabindex="-1"><a class="header-anchor" href="#nested-classes" aria-hidden="true">#</a> Nested Classes</h1><p>A nested class is a class that can be found within another class. The process of a class being enclosed in another is known as encapsulation.</p><p>There are two main types of nested classes:</p><ul><li>non-static (also known as inner) nested classes</li><li>static nested classes</li></ul><h2 id="non-static-inner" tabindex="-1"><a class="header-anchor" href="#non-static-inner" aria-hidden="true">#</a> Non-static (inner)</h2><p>Can have access to both static and non-static members of the class that it is declared within.</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">class</span> <span class="token class-name">Outer</span> <span class="token punctuation">{</span>
  <span class="token class-name">String</span> outer<span class="token punctuation">;</span>
  <span class="token comment">// Assign values using constructor</span>
  <span class="token keyword">public</span> <span class="token class-name">Outer</span><span class="token punctuation">(</span><span class="token class-name">String</span> name<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>outer <span class="token operator">=</span> name<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
 
  <span class="token comment">// private method</span>
  <span class="token keyword">private</span> <span class="token class-name">String</span> <span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>outer<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
 
  <span class="token comment">// Non-static nested class</span>
  <span class="token keyword">class</span> <span class="token class-name">Inner</span> <span class="token punctuation">{</span>
    <span class="token class-name">String</span> inner<span class="token punctuation">;</span>
    <span class="token class-name">String</span> outer<span class="token punctuation">;</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">getOuter</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// Instantiate outer class to use its method</span>
      outer <span class="token operator">=</span> <span class="token class-name">Outer</span><span class="token punctuation">.</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>In order to reference a non-static nested class outside its scope, a programmer would have to also reference its encompassing class.</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code>  <span class="token class-name">Outer</span> outer <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Outer</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token class-name">Outer<span class="token punctuation">.</span>Inner</span> inner <span class="token operator">=</span> outer<span class="token punctuation">.</span><span class="token keyword">new</span> <span class="token class-name">Inner</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="static" tabindex="-1"><a class="header-anchor" href="#static" aria-hidden="true">#</a> Static</h2><p>Can only access other static members of their encompassing class and don\u2019t have access to non-static members</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">class</span> <span class="token class-name">Outer</span> <span class="token punctuation">{</span>
 <span class="token class-name">String</span> outer<span class="token punctuation">;</span>
 <span class="token keyword">static</span> <span class="token class-name">String</span> typeStatic <span class="token operator">=</span> <span class="token string">&quot;static String type&quot;</span><span class="token punctuation">;</span>
 <span class="token class-name">String</span> typeGeneric <span class="token operator">=</span> <span class="token string">&quot;generic String type&quot;</span><span class="token punctuation">;</span>

 <span class="token comment">// Assign values using constructor</span>
 <span class="token keyword">public</span> <span class="token class-name">Outer</span><span class="token punctuation">(</span><span class="token class-name">String</span> name<span class="token punctuation">)</span> <span class="token punctuation">{</span>
   <span class="token keyword">this</span><span class="token punctuation">.</span>outer <span class="token operator">=</span> name<span class="token punctuation">;</span>
 <span class="token punctuation">}</span>

 <span class="token comment">// private method</span>
 <span class="token keyword">private</span> <span class="token class-name">String</span> <span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
   <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>outer<span class="token punctuation">;</span>
 <span class="token punctuation">}</span>

 <span class="token comment">// static nested class</span>
 <span class="token keyword">static</span> <span class="token keyword">class</span> <span class="token class-name">Inner</span> <span class="token punctuation">{</span>
   <span class="token class-name">String</span> inner<span class="token punctuation">;</span>
   <span class="token class-name">String</span> outer<span class="token punctuation">;</span>

   <span class="token keyword">void</span> <span class="token function">printTypeMethod</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
     <span class="token comment">// Can access static member of outer class</span>
     <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;Type of member = &quot;</span> <span class="token operator">+</span> typeStatic<span class="token punctuation">)</span><span class="token punctuation">;</span>
   <span class="token punctuation">}</span>
 <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>To instantiate a static nested class, you are not required to first instantiate its enclosing class.</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token class-name">Outer<span class="token punctuation">.</span>Inner</span> staticNested <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Outer<span class="token punctuation">.</span>Inner</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="shadowing" tabindex="-1"><a class="header-anchor" href="#shadowing" aria-hidden="true">#</a> Shadowing</h2><p>Shadowing allows for the overlapping scopes of members with the same name and type to exist in both a nested class and the enclosing class simultaneously.</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">class</span> <span class="token class-name">Outer</span> <span class="token punctuation">{</span>
  <span class="token class-name">String</span> name <span class="token operator">=</span> <span class="token string">&quot;Outer&quot;</span><span class="token punctuation">;</span>
 
  <span class="token comment">// Nested inner class</span>
  <span class="token keyword">class</span> <span class="token class-name">Inner</span> <span class="token punctuation">{</span>
    <span class="token class-name">String</span> name <span class="token operator">=</span> <span class="token string">&quot;Inner&quot;</span><span class="token punctuation">;</span>
 
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">printTypeMethod</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token class-name">Outer</span><span class="token punctuation">.</span><span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,17),c=[p];function i(o,l){return s(),a("div",null,c)}const r=n(t,[["render",i],["__file","NestedClasses.html.vue"]]);export{r as default};
