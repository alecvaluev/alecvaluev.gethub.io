import{_ as a,r as t,o as e,c as p,b as n,d as o,f as i,e as c}from"./app.4a73e3e5.js";const l={},u=i(`<h1 id="set" tabindex="-1"><a class="header-anchor" href="#set" aria-hidden="true">#</a> Set</h1><ul><li>unordered</li><li>unchangeable(cannot change the items after the set has been created)</li><li>unindexed</li><li>do not allow duplicate</li></ul><div class="custom-container warning"><p class="custom-container-title">Note</p><p>Set items are unchangeable, but you can remove items and add new items.</p></div><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code>thisset <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token string">&quot;apple&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;banana&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;cherry&quot;</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="len" tabindex="-1"><a class="header-anchor" href="#len" aria-hidden="true">#</a> len()</h2><h2 id="set-items" tabindex="-1"><a class="header-anchor" href="#set-items" aria-hidden="true">#</a> Set Items</h2><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code>set1 <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token string">&quot;apple&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;banana&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;cherry&quot;</span><span class="token punctuation">}</span>
set2 <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">7</span><span class="token punctuation">,</span> <span class="token number">9</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">}</span>
set3 <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token boolean">True</span><span class="token punctuation">,</span> <span class="token boolean">False</span><span class="token punctuation">,</span> <span class="token boolean">False</span><span class="token punctuation">}</span>
set4 <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token string">&quot;abc&quot;</span><span class="token punctuation">,</span> <span class="token number">34</span><span class="token punctuation">,</span> <span class="token boolean">True</span><span class="token punctuation">,</span> <span class="token number">40</span><span class="token punctuation">,</span> <span class="token string">&quot;male&quot;</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="type" tabindex="-1"><a class="header-anchor" href="#type" aria-hidden="true">#</a> type()</h2><blockquote><p>&lt; class &#39;set&#39;&gt;</p></blockquote><h2 id="constructor" tabindex="-1"><a class="header-anchor" href="#constructor" aria-hidden="true">#</a> constructor</h2><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code>thisset <span class="token operator">=</span> <span class="token builtin">set</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token string">&quot;apple&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;banana&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;cherry&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment"># note the double round-brackets</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>thisset<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="access-items" tabindex="-1"><a class="header-anchor" href="#access-items" aria-hidden="true">#</a> Access Items</h2><blockquote><p>value <code>in</code> thisset</p></blockquote><h2 id="adding" tabindex="-1"><a class="header-anchor" href="#adding" aria-hidden="true">#</a> Adding</h2><blockquote><p>add()</p></blockquote><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code>thisset <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token string">&quot;apple&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;banana&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;cherry&quot;</span><span class="token punctuation">}</span>
thisset<span class="token punctuation">.</span>add<span class="token punctuation">(</span><span class="token string">&quot;orange&quot;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>Add items from another set</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code>thisset <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token string">&quot;apple&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;banana&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;cherry&quot;</span><span class="token punctuation">}</span>
tropical <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token string">&quot;pineapple&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;mango&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;papaya&quot;</span><span class="token punctuation">}</span>

thisset<span class="token punctuation">.</span>update<span class="token punctuation">(</span>tropical<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container tip"><p class="custom-container-title">Note</p><p>update() method does not have to be a set, it can be any iterable object (tuples, lists, dictionaries etc.)</p></div><h2 id="removing" tabindex="-1"><a class="header-anchor" href="#removing" aria-hidden="true">#</a> Removing</h2><ol><li>remove()</li></ol><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code>thisset <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token string">&quot;apple&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;banana&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;cherry&quot;</span><span class="token punctuation">}</span>
thisset<span class="token punctuation">.</span>remove<span class="token punctuation">(</span><span class="token string">&quot;banana&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>thisset<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container warning"><p class="custom-container-title">Note</p><p>If the item to remove does not exist, remove() will raise an error.</p></div><ol start="2"><li>discard()</li></ol><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code>thisset<span class="token punctuation">.</span>discard<span class="token punctuation">(</span><span class="token string">&quot;banana&quot;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="custom-container warning"><p class="custom-container-title">Note</p><p>If the item to remove does not exist, discard() will NOT raise an error.</p></div><ol start="3"><li>pop() - del last</li><li>clear() - empties the set</li></ol><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code>thisset <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token string">&quot;apple&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;banana&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;cherry&quot;</span><span class="token punctuation">}</span>
thisset<span class="token punctuation">.</span>clear<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>thisset<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="5"><li>del - delete the set completely</li></ol><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token keyword">del</span> thisset
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="join-two-sets" tabindex="-1"><a class="header-anchor" href="#join-two-sets" aria-hidden="true">#</a> Join Two Sets</h2><blockquote><p>both will exclude any duplicate items.</p></blockquote><ol><li>union - ret. new set</li></ol><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code>set1 <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token string">&quot;a&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;b&quot;</span> <span class="token punctuation">,</span> <span class="token string">&quot;c&quot;</span><span class="token punctuation">}</span>
set2 <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">}</span>

set3 <span class="token operator">=</span> set1<span class="token punctuation">.</span>union<span class="token punctuation">(</span>set2<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>set3<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>update</li></ol><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code>set1 <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token string">&quot;a&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;b&quot;</span> <span class="token punctuation">,</span> <span class="token string">&quot;c&quot;</span><span class="token punctuation">}</span>
set2 <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">}</span>

set1<span class="token punctuation">.</span>update<span class="token punctuation">(</span>set2<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>set1<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="keep-only-the-duplicates" tabindex="-1"><a class="header-anchor" href="#keep-only-the-duplicates" aria-hidden="true">#</a> Keep ONLY the Duplicates</h3><ol><li>intersection_update() - present in both</li></ol><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code>x <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token string">&quot;apple&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;banana&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;cherry&quot;</span><span class="token punctuation">}</span>
y <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token string">&quot;google&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;microsoft&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;apple&quot;</span><span class="token punctuation">}</span>

x<span class="token punctuation">.</span>intersection_update<span class="token punctuation">(</span>y<span class="token punctuation">)</span>

<span class="token keyword">print</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>intersection() - new set, present in both</li></ol><h3 id="keep-all-but-not-the-duplicates" tabindex="-1"><a class="header-anchor" href="#keep-all-but-not-the-duplicates" aria-hidden="true">#</a> Keep All, But NOT the Duplicates</h3><ol><li>symmetric_difference_update() - are NOT present in both</li><li>symmetric_difference() - a new set, NOT present in both</li></ol><h2 id="set-methods" tabindex="-1"><a class="header-anchor" href="#set-methods" aria-hidden="true">#</a> Set Methods</h2>`,43),r={href:"https://www.w3schools.com/python/python_sets_methods.asp",target:"_blank",rel:"noopener noreferrer"},d=c("Set methods");function k(h,v){const s=t("ExternalLinkIcon");return e(),p("div",null,[u,n("p",null,[n("a",r,[d,o(s)])])])}const b=a(l,[["render",k],["__file","Set.html.vue"]]);export{b as default};
