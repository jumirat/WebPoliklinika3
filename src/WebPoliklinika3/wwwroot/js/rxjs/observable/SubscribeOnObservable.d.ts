import { Scheduler } from '../Scheduler';
import { Subscriber } from '../Subscriber';
import { Subscription } from '../Subscription';
import { Observable } from '../Observable';
export interface DispatchArg<T> {
    source: Observable<T>;
    subscriber: Subscriber<T>;
}
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @extends {Ignored}
 * @hide true
 */
export declare class SubscribeOnObservable<T> extends Observable<T> {
    source: Observable<T>;
    private delayTime;
    private scheduler;
    static create<T>(source: Observable<T>, delay?: number, scheduler?: Scheduler): Observable<T>;
    static dispatch<T>(arg: DispatchArg<T>): Subscription;
    constructor(source: Observable<T>, delayTime?: number, scheduler?: Scheduler);
    protected _subscribe(subscriber: Subscriber<T>): Subscription;
}
