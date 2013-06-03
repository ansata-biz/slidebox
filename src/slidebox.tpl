<div class="ui-slidebox {{#if vertical}}ui-slidebox-vertical{{else}}ui-slidebox-horizontal{{/if}} {{#unless includeButtons}}ui-slidebox-wild{{/unless}} util-clearfix">
    <div class="ui-slidebox-wrap">
        <div class="ui-slidebox-container">

            <div class="ui-slidebox-slider" data-role="slider">
				{{#if items}}
					<ul>

						{{#each items}}
							<li>
								<div class="ui-slidebox-item">
									<div class="ui-slidebox-item-thumb">
										<a href="{{url}}" rel="nofollow">
											<img alt="{{description}}" src="{{image}}" />
										</a>
									</div>
									<div class="ui-slidebox-item-info">
										{{#if title}}
											<a class="ui-slidebox-item-title" href="{{url}}" title="{{description}}">{{title}}</a>
										{{/if}}

										{{#if price}}
											<div class="ui-slidebox-item-row ui-cost"><b>{{price}}</b>{{#if unit}}&nbsp;/&nbsp;{{unit}}{{/if}}</div>
										{{/if}}

										{{#if originalPrice}}
											<div class="ui-slidebox-item-row"><del>{{originalPrice}}{{#if unit}}&nbsp;/&nbsp;{{unit}}{{/if}}</del></div>
										{{/if}}

										{{#if rating}}
											<div class="ui-slidebox-item-row">
												<span class="ui-rating">
													<span class="ui-rating-star" title="Star Rating: {{multiple rating 5 1}} out of 5">
														{{ratingPrecent rating}}
													</span>
													{{#if ratingCount}}<span class="ui-rating-count">({{digits ratingCount}})</span>{{/if}}
												</span>
											</div>
										{{/if}}

										{{#if order}}
											<div class="ui-slidebox-item-row">{{digits order}}&nbsp;Orders</div>
										{{/if}}
									</div>
								</div>
							</li>
						{{/each}}

					</ul>
				{{/if}}
            </div>

        </div>
    </div>
    <div class="ui-slidebox-prev"><a class="ui-slidebox-disabled" data-role="prev">Preview</a></div>
    <div class="ui-slidebox-next"><a class="ui-slidebox-disabled" data-role="next">Next</a></div>
</div>
